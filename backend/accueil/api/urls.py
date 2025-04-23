from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import AccueilItemViewSet

accueil_router = DefaultRouter()
accueil_router.register(r'accueil', AccueilItemViewSet, basename='accueil')
