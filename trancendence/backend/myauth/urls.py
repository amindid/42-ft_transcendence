from django.urls import path
from .views import loginUser, registerUser, deleteUser, updateInfo, sendRequest, AcceptRequest,DenyRequest, DeleteRequest, block, unblock, logoutUser, confirmEmail, userProfile, friendList, friendRequestList, myRequestsList, BlockedList, refreshAccessToken, changePassword, CheckAuthentication
from . import views
urlpatterns = [
	path('users/checkAuthentication/', CheckAuthentication.as_view(), name='CheckAuthentication'),
	path('users/login/', loginUser.as_view(), name='loginUser'),
	path('users/logout/', logoutUser.as_view(), name='logoutUser'),
	path('users/register/', registerUser.as_view(), name='registerUser'),
	path('users/update/', updateInfo.as_view(), name='updateInfo'),
	path('users/delete/', deleteUser.as_view(), name='deleteUser'),
	path('users/refresh/', refreshAccessToken.as_view(), name='refreshAccessToken'),
	path('users/confirmEmail/', confirmEmail.as_view(), name='confirmEmail'),
	path('users/activate/<uidb64>/<token>/',views.activate, name='activate'),
	path('users/userProfile/', userProfile.as_view(), name='userProfile'),
	path('users/friendList/', friendList.as_view(), name='friendList'),
	path('users/friendRequestList/', friendRequestList.as_view(), name='friendRequestList'),
	path('users/myRequestsList/', myRequestsList.as_view(), name='myRequestsList'),
	path('users/BlockedList/', BlockedList.as_view(), name='BlockedList'),
	# path('users/resetPassword/', resetPassword.as_view(), name='resetPassword'),
	path('users/changePassword/', changePassword.as_view(), name='changePassword'),
	path('friends/sendRequest/', sendRequest.as_view(), name='sendRequest'),
	path('friends/AccebtRequest/', AcceptRequest.as_view(), name='AccebtRequest'),
	path('friends/DenyRequest/', DenyRequest.as_view(), name='DenyRequest'),
	path('friends/DeleteRequest/', DeleteRequest.as_view(), name='DeleteRequest'),
	path('friends/block/', block.as_view(), name='block'),
	path('friends/unblock/', unblock.as_view(), name='unblock'),
]