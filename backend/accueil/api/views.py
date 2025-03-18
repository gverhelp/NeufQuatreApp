from rest_framework import viewsets
from ..models import AccueilItem
from .serializers import AccueilItemSerializer

class AccueilItemViewSet(viewsets.ModelViewSet):
    queryset = AccueilItem.objects.all()
    serializer_class = AccueilItemSerializer