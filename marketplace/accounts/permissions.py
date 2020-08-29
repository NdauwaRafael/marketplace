from rest_framework import permissions
from .serializers import UserSerializer


class UserIsBuyer(permissions.BasePermission):
    """
    Global permission check for user role.
    """
    def has_permission(self, request, view):
        user = UserSerializer(request.user)
        role = user.data['is_farmer']

        if role:
            return True
        else:
            return False


class UserIsAdministrator(permissions.BasePermission):
    """
    Global permission check for user role.
    """
    def has_permission(self, request, view):
        user = UserSerializer(request.user)
        role = user.data['is_admin']
        id = user.data['id']
        if role or id == '1':
            return True
        else:
            return False


class UserIsFarmer(permissions.BasePermission):
    """
    Global permission check for user role.
    """

    def has_permission(self, request, view):
        user = UserSerializer(request.user)
        role = user.data['is_farmer']

        if role:
            return True
        else:
            return False


class IsOwnerOrReadOnly(permissions.BasePermission):
    """
    Custom permission to only allow owners of an object to edit it.
    """

    def has_object_permission(self, request, view, obj):
        # Read permissions are allowed to any request,
        # so we'll always allow GET, HEAD or OPTIONS requests.
        if request.method in permissions.SAFE_METHODS:
            return True

        # Write permissions are only allowed to the owner of the snippet.
        return obj.owner == request.user