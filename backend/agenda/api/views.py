from ..models import Event, AgendaDocument
from .serializers import EventSerializer, AgendaDocumentSerializer
from rest_framework.viewsets import ReadOnlyModelViewSet


class EventViewSet(ReadOnlyModelViewSet):
    queryset = Event.objects.all()
    serializer_class = EventSerializer


class AgendaDocumentViewSet(ReadOnlyModelViewSet):
    queryset = AgendaDocument.objects.all()
    serializer_class = AgendaDocumentSerializer
