from rest_framework import viewsets
from ..models import RadioCamp, Post, Photo
from .serializers import RadioCampSerializer, PostSerializer, PhotoSerializer

class RadioCampViewSet(viewsets.ModelViewSet):
    queryset = RadioCamp.objects.all()
    serializer_class = RadioCampSerializer

class PostViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    
class PhotoViewSet(viewsets.ModelViewSet):

    queryset = Photo.objects.all()
    serializer_class = PhotoSerializer