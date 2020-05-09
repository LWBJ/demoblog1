from django.urls import path, include
from rest_framework.routers import DefaultRouter
from rest_framework import urls
from apidata import views

router = DefaultRouter()
router.register(r'places', views.PlaceViewSet)
router.register(r'races', views.RaceViewSet)
router.register(r'faces', views.FaceViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('api-auth', include(urls))
]
