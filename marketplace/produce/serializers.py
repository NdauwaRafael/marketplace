from rest_framework import serializers
from .models import Produce


class ProduceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Produce
        fields = ('uuid', 'name', 'price', 'quantity', 'description', 'category_id', 'owner')