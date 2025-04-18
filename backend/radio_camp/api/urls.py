from rest_framework.routers import DefaultRouter
from .views import RadioCampViewSet, PostViewSet, PhotoViewSet

radio_camp_router = DefaultRouter()
radio_camp_router.register(r'radio-camps', RadioCampViewSet)
radio_camp_router.register(r'posts', PostViewSet)
radio_camp_router.register(r'photos', PhotoViewSet)