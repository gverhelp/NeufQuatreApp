from rest_framework.routers import DefaultRouter
from .views import EventViewSet, AgendaDocumentViewSet

agenda_router = DefaultRouter()
agenda_router.register(r'events', EventViewSet)
agenda_router.register(r'agenda-document', AgendaDocumentViewSet)