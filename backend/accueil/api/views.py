
from ..models import AccueilItem
from .serializers import AccueilItemSerializer
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