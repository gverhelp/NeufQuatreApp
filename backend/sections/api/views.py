from rest_framework.viewsets import ReadOnlyModelViewSet
from ..models import Section, SectionImage, Chef
from .serializers import SectionSerializer, SectionImageSerializer, ChefSerializer

    
class SectionViewSet(ReadOnlyModelViewSet):
    queryset = Section.objects.prefetch_related('sectionimage_set', 'chef_set').all()
    serializer_class = SectionSerializer
    lookup_field = 'slug'


class SectionImageViewSet(ReadOnlyModelViewSet):
    queryset = SectionImage.objects.select_related('section').all()
    serializer_class = SectionImageSerializer


class ChefViewSet(ReadOnlyModelViewSet):
    queryset = Chef.objects.select_related('section').all()
    serializer_class = ChefSerializer