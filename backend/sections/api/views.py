from rest_framework import viewsets
from ..models import Section, SectionImage, Chef
from .serializers import SectionSerializer, SectionImageSerializer, ChefSerializer
from rest_framework.permissions import AllowAny

    
class SectionViewSet(viewsets.ModelViewSet):
    queryset = Section.objects.prefetch_related('sectionimage_set', 'chef_set').all()
    serializer_class = SectionSerializer
    lookup_field = 'slug'


class SectionImageViewSet(viewsets.ModelViewSet):
    queryset = SectionImage.objects.select_related('section').all()
    serializer_class = SectionImageSerializer
    permission_classes = [AllowAny]


class ChefViewSet(viewsets.ModelViewSet):
    queryset = Chef.objects.select_related('section').all()
    serializer_class = ChefSerializer
    permission_classes = [AllowAny]