from rest_framework.routers import DefaultRouter
from .views import SectionViewSet, SectionImageViewSet, ChefViewSet

sections_router = DefaultRouter()
sections_router.register(r'sections', SectionViewSet, basename='section')
sections_router.register(r'section-images', SectionImageViewSet, basename='section-image')
sections_router.register(r'chefs', ChefViewSet, basename='chef')

