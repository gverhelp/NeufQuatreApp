from rest_framework import viewsets
from ..models import Section, SectionImage, Chef
from .serializers import SectionSerializer, SectionImageSerializer, ChefSerializer


class SectionViewSet(viewsets.ModelViewSet):
    queryset = Section.objects.all()
    serializer_class = SectionSerializer
    
class SectionImageViewSet(viewsets.ModelViewSet):
    queryset = SectionImage.objects.all()
    serializer_class = SectionImageSerializer

class ChefViewSet(viewsets.ModelViewSet):
    queryset = Chef.objects.all()
    serializer_class = ChefSerializer

