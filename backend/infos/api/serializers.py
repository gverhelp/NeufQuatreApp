from rest_framework import serializers
from ..models import Info, Document


class InfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Info
        fields = ['id', 'title', 'description', 'image', 'video', 'created_at', 'updated_at']
        read_only_fields = ['created_at', 'updated_at']

class DocumentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Document
        fields = ['id', 'title', 'description', 'file', 'created_at', 'updated_at']
        read_only_fields = ['created_at', 'updated_at']
