from ..models import RadioCamp, Post, Photo, Video, Section
from .serializers import RadioCampSerializer, PostSerializer, PhotoSerializer, VideoSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from rest_framework.viewsets import ReadOnlyModelViewSet
from django.shortcuts import get_object_or_404
from django.contrib.auth.hashers import check_password
# from django.views.decorators.csrf import csrf_exempt
# from django.utils.decorators import method_decorator

# ViewSets for the API
class RadioCampViewSet(ReadOnlyModelViewSet):
    queryset = RadioCamp.objects.all()
    serializer_class = RadioCampSerializer
    lookup_field = 'section__slug'

class PostViewSet(ReadOnlyModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    
class PhotoViewSet(ReadOnlyModelViewSet):
    queryset = Photo.objects.all()
    serializer_class = PhotoSerializer
    
class VideoViewSet(ReadOnlyModelViewSet):
    queryset = Video.objects.all()
    serializer_class = VideoSerializer
    

# API View to verify the password for a RadioCamp
# @method_decorator(csrf_exempt, name='dispatch')
class VerifyRadioCampPassword(APIView):
    permission_classes = [AllowAny]
    
    def post(self, request, section_slug):
        password_input = request.data.get("password")

        section = get_object_or_404(Section, slug=section_slug)
        radio_camp = get_object_or_404(RadioCamp, section=section)

        if check_password(password_input, radio_camp.password):
            return Response({"success": True})
        else:
            return Response({"success": False, "error": "Mot de passe invalide."})