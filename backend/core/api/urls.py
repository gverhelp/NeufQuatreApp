from rest_framework.routers import DefaultRouter
from accueil.api.urls import accueil_router
from sections.api.urls import sections_router
from agenda.api.urls import agenda_router
from radio_camp.api.urls import radio_camp_router
from infos.api.urls import infos_router
from django.urls import path, include
from radio_camp.api.views import VerifyRadioCampPassword

router = DefaultRouter()
router.registry.extend(accueil_router.registry)
router.registry.extend(sections_router.registry)
router.registry.extend(agenda_router.registry)
router.registry.extend(radio_camp_router.registry)
router.registry.extend(infos_router.registry)

urlpatterns = [
    path('', include(router.urls)),
    path('radio-camps/<str:section_slug>/verify-password/', VerifyRadioCampPassword.as_view(), name='verify-radio-camp-password'),
]