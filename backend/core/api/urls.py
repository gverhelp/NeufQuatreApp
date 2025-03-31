from rest_framework.routers import DefaultRouter
from accueil.api.urls import accueil_router
from sections.api.urls import sections_router
from django.urls import path, include

router = DefaultRouter()
router.registry.extend(accueil_router.registry)
router.registry.extend(sections_router.registry)

urlpatterns = [
    path('', include(router.urls)),
]