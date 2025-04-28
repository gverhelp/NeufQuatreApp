from rest_framework.routers import DefaultRouter
from .views import InfoViewSet, DocumentViewSet

infos_router = DefaultRouter()
infos_router.register(r'infos', InfoViewSet, basename='info')
infos_router.register(r'documents', DocumentViewSet, basename='document')