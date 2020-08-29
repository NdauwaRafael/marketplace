from abc import ABC

from rest_framework import serializers
from .models import User
from django.contrib.auth import authenticate


# from posts.serializers import PostSerializer


# User Serializer
class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = (
            'id', 'username', 'email', 'first_name', 'last_name',
            'id_no', 'phone', 'owner', 'bio', 'is_farmer', 'is_buyer', 'is_admin')


# Register Serializer
class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'first_name', 'last_name',
                  'id_no', 'phone', 'owner', 'bio', 'is_farmer', 'is_buyer', 'is_admin', 'password')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = User.objects.create_user(validated_data['username'], email=validated_data['email'],
                                        first_name=validated_data['first_name'], last_name=validated_data['last_name'],
                                        id_no=validated_data['id_no'],
                                        phone=validated_data['phone'])

        return user


# Update Serializer
class UpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'first_name', 'last_name',
                  'id_no', 'phone', 'is_farmer', 'is_buyer', 'is_admin')

    def create(self, validated_data):
        user = User.objects.create_user(validated_data['username'], email=validated_data['email'],
                                        first_name=validated_data['first_name'], last_name=validated_data['last_name'],
                                        id_no=validated_data['id_no'],
                                        phone=validated_data['phone'])

        return user


# Login Serializer
class LoginSerializer(serializers.Serializer, ABC):
    username = serializers.CharField()
    password = serializers.CharField()

    def validate(self, data):
        user = authenticate(**data)
        if user and user.is_active:
            return user
        raise serializers.ValidationError("Incorrect Credentials")
