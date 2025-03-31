from rest_framework.routers import DefaultRouter
from .views import SectionViewSet, SectionImageViewSet, ChefViewSet

sections_router = DefaultRouter()
sections_router.register(r'sections', SectionViewSet)
sections_router.register(r'section-images', SectionImageViewSet)
sections_router.register(r'chefs', ChefViewSet)

