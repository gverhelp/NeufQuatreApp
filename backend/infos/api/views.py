from ..models import Info, Document
from .serializers import InfoSerializer, DocumentSerializer
from rest_framework.viewsets import ReadOnlyModelViewSet


class InfoViewSet(ReadOnlyModelViewSet):
    queryset = Info.objects.all()
    serializer_class = InfoSerializer


class DocumentViewSet(ReadOnlyModelViewSet):
    queryset = Document.objects.all()
    serializer_class = DocumentSerializer
