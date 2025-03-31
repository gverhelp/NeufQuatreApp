from rest_framework import serializers
from ..models import Section, SectionImage, Chef


class SectionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Section
        fields = ['id', 'name', 'description', 'bankAccount', 'email', 'filled']

class SectionImageSerializer(serializers.ModelSerializer):
    section = SectionSerializer()
    
    class Meta:
        model = SectionImage
        fields = ['id', 'title', 'image', 'section']


class ChefSerializer(serializers.ModelSerializer):
    section = SectionSerializer()

    class Meta:
        model = Chef
        fields = ['id', 'name', 'totem', 'bafouille', 'image', 'phoneNumber', 'section']

