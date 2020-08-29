from rest_framework import viewsets, permissions
from .serializers import ProduceSerializer
from .models import Produce
from accounts.permissions import UserIsFarmer, IsOwnerOrReadOnly


# Public posts
class ProduceViewSet(viewsets.ModelViewSet):
    serializer_class = ProduceSerializer

    def get_queryset(self):
        return Produce.objects.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)

    def perform_update(self, serializer, **kwargs):
        serializer.save()

    def perform_destroy(self, instance):
        instance.delete()

    def get_permissions(self):
        if self.request.method == 'GET':
            permission_classes = [permissions.IsAuthenticated]
        elif self.request.method == 'DELETE':
            permission_classes = [IsOwnerOrReadOnly, UserIsFarmer]
        elif self.request.method == 'POST':
            permission_classes = [IsOwnerOrReadOnly, UserIsFarmer]
        elif self.request.method == 'PUT':
            permission_classes = [IsOwnerOrReadOnly]
        elif self.request.method == 'UPDATE':
            permission_classes = [IsOwnerOrReadOnly]

        return [permission() for permission in permission_classes]
