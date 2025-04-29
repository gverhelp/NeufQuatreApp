from rest_framework import viewsets
from ..models import Section, SectionImage, Chef
from .serializers import SectionSerializer, SectionImageSerializer, ChefSerializer
from rest_framework.exceptions import ValidationError

    
class SectionViewSet(viewsets.ModelViewSet):
    queryset = Section.objects.prefetch_related('sectionimage_set', 'chef_set').all()
    serializer_class = SectionSerializer
    lookup_field = 'slug'
    
    def create(self, request, *args, **kwargs):
        raise ValidationError("Vous ne pouvez pas créer une section supplémentaire.")

    def destroy(self, request, *args, **kwargs):
        raise ValidationError("Vous ne pouvez pas supprimer une section.")


class SectionImageViewSet(viewsets.ModelViewSet):
    queryset = SectionImage.objects.select_related('section').all()
    serializer_class = SectionImageSerializer


class ChefViewSet(viewsets.ModelViewSet):
    queryset = Chef.objects.select_related('section').all()
    serializer_class = ChefSerializer