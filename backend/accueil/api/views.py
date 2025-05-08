
from ..models import AccueilItem, AccueilButton
from .serializers import AccueilItemSerializer, AccueilButtonSerializer
from rest_framework.exceptions import ValidationError
from rest_framework.viewsets import ReadOnlyModelViewSet

class AccueilItemViewSet(ReadOnlyModelViewSet):
    queryset = AccueilItem.objects.all()
    serializer_class = AccueilItemSerializer
    
    def create(self, request, *args, **kwargs):
        if AccueilItem.objects.count() >= 2:
            raise ValidationError("Vous ne pouvez pas créer plus de 2 Accueil Items.")
        return super().create(request, *args, **kwargs)

    def destroy(self, request, *args, **kwargs):
        if AccueilItem.objects.count() <= 2:
            raise ValidationError("Vous ne pouvez pas supprimer les deux derniers Accueil Items.")
        return super().destroy(request, *args, **kwargs)
    

class AccueilButtonViewSet(ReadOnlyModelViewSet):
    queryset = AccueilButton.objects.all()
    serializer_class = AccueilButtonSerializer
    
    def create(self, request, *args, **kwargs):
        if AccueilButton.objects.count() >= 2:
            raise ValidationError("Vous ne pouvez pas créer plus de 2 Accueil Buttons.")
        return super().create(request, *args, **kwargs)

    def destroy(self, request, *args, **kwargs):
        if AccueilButton.objects.count() <= 2:
            raise ValidationError("Vous ne pouvez pas supprimer les deux derniers Accueil Buttons.")
        return super().destroy(request, *args, **kwargs)