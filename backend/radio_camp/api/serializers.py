from rest_framework import serializers
from ..models import RadioCamp, Post, Photo
from sections.models import Section

class PhotoSerializer(serializers.ModelSerializer):
    post = Post()
    class Meta:
        model = Photo
        fields = ['id', 'post', 'image', 'caption']
        
class PostSerializer(serializers.ModelSerializer):
    photos = PhotoSerializer(many=True, read_only=True)
    radio_camp = RadioCamp()

    class Meta:
        model = Post
        fields = ['id', 'radio_camp', 'title', 'content', 'date', 'photos']

class RadioCampSerializer(serializers.ModelSerializer):
    section = serializers.SlugRelatedField(
        slug_field='slug',
        queryset=Section.objects.all()
    )
    posts = PostSerializer(many=True, read_only=True)
    
    class Meta:
        model = RadioCamp
        fields = ['id', 'section', 'title', 'password', 'start_date', 'end_date', 'posts']
