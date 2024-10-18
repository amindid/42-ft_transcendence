from .serializers import UserSerializer, StatsSerializer, RefreshTokensSerializer
import hashlib
from rest_framework.decorators import api_view, authentication_classes, permission_classes
from rest_framework.response import Response
from rest_framework.request import Request
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework import status
from rest_framework_simplejwt.tokens import RefreshToken, AccessToken, UntypedToken
from rest_framework_simplejwt.exceptions import TokenError
from .models import User, Stats, RefreshTokens
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from django.shortcuts import get_object_or_404
from django.contrib.sites.shortcuts import get_current_site
from django.utils.http import urlsafe_base64_encode, urlsafe_base64_decode
from django.utils.encoding import force_bytes, force_str
from django.core.mail import send_mail
from .tokens import email_confirmation_token
from rest_framework.authentication import SessionAuthentication, TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from datetime import datetime
import jwt
from rest_framework.authentication import BaseAuthentication
from rest_framework.exceptions import AuthenticationFailed
from rest_framework.views import APIView
from django.conf import settings



class CookieJWTAuthentication(BaseAuthentication):
	def authenticate(self, request):
		access_token = request.COOKIES.get('access_token')
		if not access_token:
			return None
		try :
			payload = jwt.decode(access_token, settings.SECRET_KEY, algorithms=['HS256'])
		except jwt.ExpiredSignatureError:
			raise AuthenticationFailed({'error': 'token expired'})
		except jwt.InvalidTokenError:
			raise AuthenticationFailed('Invalid token')
		try:
			user = User.objects.get(id=payload['user_id'])
		except User.DoesNotExist:
			raise AuthenticationFailed('User not found')
		return (user, None)


class CheckAuthentication(APIView):
	authentication_classes = [CookieJWTAuthentication]
	permission_classes = [IsAuthenticated]
	def get(self, request):
		return Response({'authenticated': True}, status=status.HTTP_200_OK)

def activate(request, uidb64,token):
	try:
		uid = force_str(urlsafe_base64_decode(uidb64))
		user = User.objects.get(pk=uid)
	except (TypeError, ValueError, OverflowError, User.DoesNotExist):
		user = None
	if user is not None and email_confirmation_token.check_token(user, token):
		user.is_email_confirmed = True
		user.save()
		return Response({'messages' : 'email confirmed successfuly'}, status=status.HTTP_200_OK)
	else:
		return Response({'error' : 'email activation is invalid'}, status=status.HTTP_400_BAD_REQUEST)


def hash_password(password):
	password_bytes = password.encode('utf-8')
	sha256 = hashlib.sha256()
	sha256.update(password_bytes)
	hashed_password = sha256.hexdigest()
	return hashed_password


class refreshAccessToken(APIView):
	def post(self,request):
		try:
			# user: User = request.user
			access_token = request.COOKIES.get('access_token')
			if not access_token:
				return Response({'error': 'invalide refresh token'}, status=status.HTTP_400_BAD_REQUEST)
			payload = jwt.decode(access_token, settings.SECRET_KEY, algorithms=['HS256'], options={'verify_exp': False})
			user_id = payload.get('user_id')
			if not user_id:
				return Response({'error': 'invalide refresh token'}, status=status.HTTP_400_BAD_REQUEST)
			user = User.objects.get(id=user_id)
			token: RefreshTokens = RefreshTokens.objects.get(user=user)
			access_token = token.refresh_access_token()
			return Response({'access': access_token}, status=status.HTTP_200_OK)
		except:
			return Response({'error': 'invalide refresh token'}, status=status.HTTP_400_BAD_REQUEST)

class loginUser(APIView):
	def post(self, request):
		try:
			username = request.data['username']
			password = request.data['password']
			user = User.objects.filter(username=username).first()
		except User.DoesNotExist:
			return Response({'error': 'user not found'}, status=status.HTTP_404_NOT_FOUND)
		except Exception as e:
			return Response({'error': 'username and password fields are required'}, status=status.HTTP_400_BAD_REQUEST)
		if not user:
			return Response({'error': 'invalide username.'}, status=status.HTTP_401_UNAUTHORIZED)
		if user.check_password(hash_password(password)):
			refresh = RefreshTokens.objects.filter(user=user).first()
			if refresh is None:
				refresh_token = RefreshTokensSerializer(data={'user':user.id})
				if refresh_token.is_valid():
					refresh = refresh_token.save()
			refresh.save()
			response = Response({"access": refresh.get_access_token(), "refresh" : refresh.token}, status=status.HTTP_201_CREATED)
			response.set_cookie (
				key='access_token',
				value=refresh.get_access_token(),
				httponly=True,
				secure=False,
				samesite='lax'
			)
			return response
		return Response({'error': 'incorrect password.'}, status=status.HTTP_401_UNAUTHORIZED)


class logoutUser(APIView):
	authentication_classes = [JWTAuthentication]
	permission_classes = [IsAuthenticated]
	def post(self, request):
		try:
			user = request.user
			refresh_token = RefreshTokens.objects.get(user=user)
			token = RefreshToken(refresh_token.token)
			token.blacklist()
			refresh_token.delete()
			return Response ({'message': 'logout successful.'} , status=status.HTTP_205_RESET_CONTENT)
		except Exception as e:
			return Response ({'error':'invalide request'},status=status.HTTP_400_BAD_REQUEST)


class registerUser(APIView):
	def post(self, request):
		serializer = UserSerializer(data=request.data)
		if serializer.is_valid():
			if serializer.validated_data['password'] == request.data['passwordConfirmation']:
				if User.objects.filter(username=serializer.validated_data['username']).exists():
					return Response({'error': 'username is already in use.'}, status=status.HTTP_400_BAD_REQUEST)
				if User.objects.filter(username=serializer.validated_data['email']).exists():
					return Response({'error': 'email is already in use.'}, status=status.HTTP_400_BAD_REQUEST)
				user = serializer.save()
				user.password = hash_password(serializer.validated_data['password'])
				data = {
					'user': user.id
				}
				refresh = RefreshTokensSerializer(data=data)
				if refresh.is_valid():
					refresh_token: RefreshTokens = refresh.save()
					# refresh_token.save()
					user.save()
					response = Response({"access": refresh_token.get_access_token(), "refresh" : refresh_token.token}, status=status.HTTP_201_CREATED)
					response.set_cookie (
						key='access_token',
						value=refresh_token.get_access_token(),
						httponly=True,
						secure=False,
						samesite='lax'
					)
					return response
				else:
					return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
			else:
				return Response({'error': 'passwords do not match!'}, status=status.HTTP_400_BAD_REQUEST)
		return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class confirmEmail(APIView):
	authentication_classes = [JWTAuthentication]
	permission_classes = [IsAuthenticated]
	def get(self,request):
		try:
			user: User = request.user
			if user.is_email_confirmed:
				return Response({'error': 'email already confirmed.'}, status=status.HTTP_400_BAD_REQUEST)
			current_site = get_current_site(request)
			mail_subject = 'Email Confirmation'
			token = email_confirmation_token.make_token(user)
			uid = urlsafe_base64_encode(force_bytes(user.pk))
			message = f"""Hi {user.username},
			Thank you for registering. Please click the link below to confirm your email:
						http://{current_site}/api/users/activate/{uid}/{token}/ Activate your account"""
			send_mail(mail_subject, message, 'wepong10auth@gmail.com', [user.email])
			return Response({'message': 'email confirmation sent successfully.'}, status=status.HTTP_200_OK)
		except Exception as e:
			return Response({'error' : 'invalide request'}, status=status.HTTP_400_BAD_REQUEST)



class updateInfo(APIView):
	authentication_classes = [JWTAuthentication]
	permission_classes = [IsAuthenticated]
	def put(self, request):
		user = request.user
		serializer = UserSerializer(User.objects.get(id=user.id), data=request.data, partial=True)
		if serializer.is_valid():
			serializer.save()
			return Response(serializer.data, status=status.HTTP_200_OK)
		else:
			return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class deleteUser(APIView):
	authentication_classes = [JWTAuthentication]
	permission_classes = [IsAuthenticated]
	def delete(self, request):
		user = request.user
		try:
			user.delete()
		except:
			return Response(status=status.HTTP_404_NOT_FOUND)
		return Response(status=status.HTTP_204_NO_CONTENT)



class changePassword(APIView):
	authentication_classes = [JWTAuthentication]
	permission_classes = [IsAuthenticated]
	def post(self,request):
		user: User = request.user
		password = request.data['password']
		if user.check_password(hash_password(password)):
			newPassword = request.data['newPassword']
			newPasswordConfirmation = request.data['newPasswordConfirmation']
			if newPassword == newPasswordConfirmation:
				if not newPassword:
					return Response({'error': 'new password is required'}, status=status.HTTP_400_BAD_REQUEST)
				user.set_password(hash_password(newPassword))
				return Response({'message': 'password changed successfully.'}, status=status.HTTP_200_OK)
			return Response({'error': 'passwords do not match'}, status=status.HTTP_400_BAD_REQUEST)
		return Response({'error': 'password is incorrect'}, status=status.HTTP_400_BAD_REQUEST)




class userProfile(APIView):
	authentication_classes = [JWTAuthentication]
	permission_classes = [IsAuthenticated]
	def get(self, request):
		user_id = request.data['user_id']
		if not user_id:
			return Response({'error': 'user_id is required.'}, status=status.HTTP_400_BAD_REQUEST)
		user = User.objects.get(id=user.id)
		if user is None:
			return Response({'error': 'user not found.'}, status=status.HTTP_404_NOT_FOUND)
		data = {
			'username' : user.username,
			'avatar' : user.avatar,
			'email' : user.email
		}
		return Response(data, status=status.HTTP_200_OK)


class friendList(APIView):
	authentication_classes = [JWTAuthentication]
	permission_classes = [IsAuthenticated]
	def get(self, request):
		user_id = request.data['user_id']
		if not user_id:
			return Response({'error': 'user_id is required.'}, status=status.HTTP_400_BAD_REQUEST)
		user = User.objects.get(id=user.id)
		if user is None:
			return Response({'error': 'user not found.'}, status=status.HTTP_404_NOT_FOUND)
		data = {
			'friends' : user.friends,
		}
		return Response(data, status=status.HTTP_200_OK)


class myRequestsList(APIView):
	authentication_classes = [JWTAuthentication]
	permission_classes = [IsAuthenticated]
	def get(self, request):
		user_id = request.data['user_id']
		if not user_id:
			return Response({'error': 'user_id is required.'}, status=status.HTTP_400_BAD_REQUEST)
		user = User.objects.get(id=user.id)
		if user is None:
			return Response({'error': 'user not found.'}, status=status.HTTP_404_NOT_FOUND)
		data = {
			'myRequests' : user.MyRequests,
		}
		return Response(data, status=status.HTTP_200_OK)


class BlockedList(APIView):
	authentication_classes = [JWTAuthentication]
	permission_classes = [IsAuthenticated]
	def get(self, request):
		user_id = request.data['user_id']
		if not user_id:
			return Response({'error': 'user_id is required.'}, status=status.HTTP_400_BAD_REQUEST)
		user = User.objects.get(id=user.id)
		if user is None:
			return Response({'error': 'user not found.'}, status=status.HTTP_404_NOT_FOUND)
		data = {
			'blockedList' : user.Blocked,
		}
		return Response(data, status=status.HTTP_200_OK)


class friendRequestList(APIView):
	authentication_classes = [JWTAuthentication]
	permission_classes = [IsAuthenticated]
	def get(self, request):
		user_id = request.data['user_id']
		if not user_id:
			return Response({'error': 'user_id is required.'}, status=status.HTTP_400_BAD_REQUEST)
		user = User.objects.get(id=user.id)
		if user is None:
			return Response({'error': 'user not found.'}, status=status.HTTP_404_NOT_FOUND)
		data = {
			'friendsRequests' : user.friendRequests,
		}
		return Response(data, status=status.HTTP_200_OK)


class sendRequest(APIView):
	authentication_classes = [JWTAuthentication]
	permission_classes = [IsAuthenticated]
	def post(self, request):
		try: 
			sender_id = request.user.id
			reciever_id = request.data['user_id']
			if not reciever_id:
				return Response({'error': 'Receiver user_id is required.'}, status=status.HTTP_400_BAD_REQUEST)
			sender = User.objects.get(id=sender_id)
			reciever = User.objects.get(id=reciever_id)
			if sender_id == reciever_id:
				return Response({'error': 'You cannot send a friend request to yourself.'}, status=status.HTTP_400_BAD_REQUEST)
			sender.sendRequest(reciever_id)
			reciever.addFriendRequest(sender_id)
			return Response({'message': 'Friend request sent successfully'},status=status.HTTP_200_OK)
		except User.DoesNotExist:
			return Response({'error': 'User not found.'}, status=status.HTTP_404_NOT_FOUND)
		except Exception as e:
			return Response({'error': 'already sent'}, status=status.HTTP_400_BAD_REQUEST)


class AcceptRequest(APIView):
	authentication_classes = [JWTAuthentication]
	permission_classes = [IsAuthenticated]
	def post(self, request):
		try:
			sender_id = request.data['user_id']
			reciever_id = request.user.id
			if not reciever_id:
				return Response({'error': 'Receiver user_id is required.'}, status=status.HTTP_400_BAD_REQUEST)
			sender = User.objects.get(id=sender_id)
			reciever = User.objects.get(id=reciever_id)
			if sender_id == reciever_id:
				return Response({'error': 'invalide request'}, status=status.HTTP_400_BAD_REQUEST)
			sender.DeleteRequest(reciever_id)
			sender.addFriend(reciever_id)
			reciever.DeleteFriendRequest(sender_id)
			reciever.addFriend(sender_id)
			return Response({'message': 'Friend request accepted successfully'},status=status.HTTP_200_OK)
		except User.DoesNotExist:
			return Response({'error': 'User not found.'}, status=status.HTTP_404_NOT_FOUND)
		except Exception as e:
			return Response({'error': 'invalide request'}, status=status.HTTP_400_BAD_REQUEST)


class DenyRequest(APIView):
	authentication_classes = [JWTAuthentication]
	permission_classes = [IsAuthenticated]
	def delete(self, request):
		try:
			sender_id = request.data['user_id']
			reciever_id = request.user.id
			if not reciever_id:
				return Response({'error': 'Receiver user_id is required.'}, status=status.HTTP_400_BAD_REQUEST)
			sender = User.objects.get(id=sender_id)
			reciever = User.objects.get(id=reciever_id)
			if sender_id == reciever_id:
				return Response({'error': 'invalide request'}, status=status.HTTP_400_BAD_REQUEST)
			reciever.DeleteFriendRequest(sender_id)
			sender.DeleteRequest(reciever_id)
			return Response({'message': 'Friend request denyed successfully'},status=status.HTTP_204_NO_CONTENT)
		except User.DoesNotExist:
			return Response({'error': 'User not found.'}, status=status.HTTP_404_NOT_FOUND)
		except Exception as e:
			return Response({'error': 'invalide request'}, status=status.HTTP_400_BAD_REQUEST)


class DeleteRequest(APIView):
	authentication_classes = [JWTAuthentication]
	permission_classes = [IsAuthenticated]
	def delete(self, request):
		try:
			reciever_id = request.data['user_id']
			sender_id = request.user.id
			if not reciever_id:
				return Response({'error': 'Receiver user_id is required.'}, status=status.HTTP_400_BAD_REQUEST)
			sender = User.objects.get(id=sender_id)
			reciever = User.objects.get(id=reciever_id)
			if sender_id == reciever_id:
				return Response({'error': 'invalide request'}, status=status.HTTP_400_BAD_REQUEST)
			reciever.DeleteFriendRequest(sender_id)
			sender.DeleteRequest(reciever_id)
			return Response({'message': 'Friend request deleted successfully'},status=status.HTTP_204_NO_CONTENT)
		except User.DoesNotExist:
			return Response({'error': 'User not found.'}, status=status.HTTP_404_NOT_FOUND)
		except Exception as e:
			return Response({'error': 'invalide request'}, status=status.HTTP_400_BAD_REQUEST)


class block(APIView):
	authentication_classes = [JWTAuthentication]
	permission_classes = [IsAuthenticated]
	def post(self,request):
		try:
			user: User = request.user
			toBeBlocked = User.objects.get(id=request.data['toBeBlocked_id'])
			if not toBeBlocked:
					return Response({'error': 'toBeBlocked user_id is required.'}, status=status.HTTP_400_BAD_REQUEST)
			if user.id == toBeBlocked.id:
				return Response({'error': 'you cannot block yourself'}, status=status.HTTP_400_BAD_REQUEST)
			user.block(toBeBlocked.id)
			user.DeleteFriend(toBeBlocked.id)
			toBeBlocked.DeleteFriend(user)
			return Response({'message': 'user blocked successfully'},status=status.HTTP_200_OK)
		except User.DoesNotExist:
			return Response({'error':'User not found.'}, status=status.HTTP_404_NOT_FOUND)
		except Exception as e:
			return Response({'error': 'invalide request'}, status=status.HTTP_400_BAD_REQUEST)


class unblock(APIView):
	authentication_classes = [JWTAuthentication]
	permission_classes = [IsAuthenticated]
	def delete(self,request):
		try:
			user: User = request.user
			toBeUnblocked = User.objects.get(id=request.data['toBeUnblocked'])
			user.unblock(toBeUnblocked)
			return Response({'message': 'user unblocked successfully'},status=status.HTTP_204_NO_CONTENT)
		except User.DoesNotExist:
			return Response({'error': 'User not found.'},status=status.HTTP_404_NOT_FOUND)
		except Exception as e:
			return Response({'error':'invalide request.'},status=status.HTTP_400_BAD_REQUEST)