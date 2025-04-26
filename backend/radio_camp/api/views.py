from rest_framework import viewsets
from ..models import RadioCamp, Post, Photo, Video, Section
from .serializers import RadioCampSerializer, PostSerializer, PhotoSerializer, VideoSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from django.shortcuts import get_object_or_404
from django.contrib.auth.hashers import check_password

# ViewSets for the API
class RadioCampViewSet(viewsets.ModelViewSet):
    queryset = RadioCamp.objects.all()
    serializer_class = RadioCampSerializer
    lookup_field = 'section__slug'

class PostViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    
class PhotoViewSet(viewsets.ModelViewSet):
    queryset = Photo.objects.all()
    serializer_class = PhotoSerializer
    
class VideoViewSet(viewsets.ModelViewSet):
    queryset = Video.objects.all()
    serializer_class = VideoSerializer
    

# API View to verify the password for a RadioCamp
class VerifyRadioCampPassword(APIView):
    def post(self, request, section_slug):
        password_input = request.data.get("password")

        section = get_object_or_404(Section, slug=section_slug)
        radio_camp = get_object_or_404(RadioCamp, section=section)

        if check_password(password_input, radio_camp.password):
            return Response({"success": True})
        else:
            return Response({"success": False, "error": "Mot de passe invalide."})