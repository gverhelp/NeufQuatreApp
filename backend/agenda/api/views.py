from rest_framework import viewsets
from ..models import Event, AgendaDocument
from .serializers import EventSerializer, AgendaDocumentSerializer


class EventViewSet(viewsets.ModelViewSet):
    queryset = Event.objects.all()
    serializer_class = EventSerializer


class AgendaDocumentViewSet(viewsets.ModelViewSet):
    queryset = AgendaDocument.objects.all()
    serializer_class = AgendaDocumentSerializer
