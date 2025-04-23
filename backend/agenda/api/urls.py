from rest_framework.routers import DefaultRouter
from .views import EventViewSet

agenda_router = DefaultRouter()
agenda_router.register(r'events', EventViewSet)