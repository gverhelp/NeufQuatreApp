from rest_framework import viewsets
from ..models import Info, Document
from .serializers import InfoSerializer, DocumentSerializer


class InfoViewSet(viewsets.ModelViewSet):
    queryset = Info.objects.all()
    serializer_class = InfoSerializer


class DocumentViewSet(viewsets.ModelViewSet):
    queryset = Document.objects.all()
    serializer_class = DocumentSerializer
