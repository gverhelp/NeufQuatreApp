from rest_framework.routers import DefaultRouter
from neuf_quatre.api.urls import post_router
from django.urls import path, include

router = DefaultRouter()

#neuf_quatre
router.registry.extend(post_router.registry)

urlpatterns = [
    path('', include(router.urls)),
]