from rest_framework import serializers
from ..models import AccueilItem

class AccueilItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = AccueilItem
        fields = '__all__'
