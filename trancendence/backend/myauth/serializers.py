from rest_framework import serializers
from .models import User, Stats, RefreshTokens

class UserSerializer(serializers.ModelSerializer):
	class Meta:
		model = User
		fields = '__all__'

class StatsSerializer(serializers.ModelSerializer):
	class Meta:
		model = Stats
		fields = '__all__'

class RefreshTokensSerializer(serializers.ModelSerializer):
	class Meta:
		model = RefreshTokens
		fields = ['user']