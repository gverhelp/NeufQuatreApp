from rest_framework import serializers
from ..models import AccueilItem, AccueilButton

class AccueilItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = AccueilItem
        fields = '__all__'

class AccueilButtonSerializer(serializers.ModelSerializer):
    class Meta:
        model = AccueilButton
        fields = '__all__'

