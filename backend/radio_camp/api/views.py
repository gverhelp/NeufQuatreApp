from rest_framework import viewsets
from ..models import RadioCamp, Post, Photo, Section
from .serializers import RadioCampSerializer, PostSerializer, PhotoSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.shortcuts import get_object_or_404
from django.contrib.auth.hashers import check_password

# ViewSets for the API
class RadioCampViewSet(viewsets.ModelViewSet):
    queryset = RadioCamp.objects.all()
    serializer_class = RadioCampSerializer

class PostViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    
class PhotoViewSet(viewsets.ModelViewSet):

    queryset = Photo.objects.all()
    serializer_class = PhotoSerializer
    

# API View to verify the password for a RadioCamp
class VerifyRadioCampPassword(APIView):
    def post(self, request, section_slug):
        password_input = request.data.get("password")

        section = get_object_or_404(Section, slug=section_slug)
        radio_camp = get_object_or_404(RadioCamp, section=section)

        if radio_camp.password == password_input:
            return Response({"success": True})
        else:
            return Response({"success": False}, status=status.HTTP_401_UNAUTHORIZED)