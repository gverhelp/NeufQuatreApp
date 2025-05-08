from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import AccueilItemViewSet, AccueilButtonViewSet

accueil_router = DefaultRouter()
accueil_router.register(r'accueil-items', AccueilItemViewSet, basename='accueil-items')
accueil_router.register(r'accueil-buttons', AccueilButtonViewSet, basename='accueil-buttons')
