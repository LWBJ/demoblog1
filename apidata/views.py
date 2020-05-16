from django.shortcuts import render
from rest_framework import viewsets, permissions
from apidata.models import Place, Race, Face
from apidata.serializers import PlaceSerializer, RaceSerializer, FaceSerializer

# Create your views here.

class PlaceViewSet(viewsets.ModelViewSet):
  queryset = Place.objects.all()
  serializer_class = PlaceSerializer
  permission_classes = [permissions.IsAuthenticatedOrReadOnly]
  
  def get_queryset(self):
    queryset = Place.objects.all()
    params = self.request.query_params
    
    name = params.get('name', False)
    if name:
      queryset = queryset.filter(name__icontains=name)
      
    race = params.get('race', False)
    if race:
      queryset = queryset.filter(race__name__icontains=race)
    
    face = params.get('face', False)
    if face:
      queryset = queryset.filter(race__face__name__icontains=face)
      
    order = params.get('order', False)
    if order:
      queryset = queryset.order_by(order)
    
    return queryset
  
class RaceViewSet(viewsets.ModelViewSet):
  queryset = Race.objects.all()
  serializer_class = RaceSerializer
  permission_classes = [permissions.IsAuthenticatedOrReadOnly]
  
  def get_queryset(self):
    queryset = Race.objects.all()
    params = self.request.query_params
    
    name = params.get('name', False)
    if name:
      queryset = queryset.filter(name__icontains=name)
      
    place = params.get('place', False)
    if place:
      queryset = queryset.filter(place__name__icontains=place)
      
    face = params.get('face', False)
    if face:
      queryset = queryset.filter(face__name__icontains=face)
      
    before = params.get('before', False)
    if before:
      queryset = queryset.filter(date__lt=before)
      
    after = params.get('after', False)
    if after:
      queryset = queryset.filter(date__gt=after)
      
    order = params.get('order', False)
    if order:
      queryset = queryset.order_by(order)
    
    return queryset
  
class FaceViewSet(viewsets.ModelViewSet):
  queryset = Face.objects.all()
  serializer_class = FaceSerializer
  permission_classes = [permissions.IsAuthenticatedOrReadOnly]
  
  def get_queryset(self):
    queryset = Face.objects.all()
    params = self.request.query_params
    
    name = params.get('name', False)
    if name:
      queryset = queryset.filter(name__icontains=name)
      
    race = params.get('race', False)
    if race:
      queryset = queryset.filter(race__name__icontains=race)
    
    place = params.get('place', False)
    if place:
      queryset = queryset.filter(race__place__name__icontains=place)
      
    worn_out = params.get('worn_out', False)
    if worn_out == 'T':
      queryset = queryset.filter(worn_out=True)
    elif worn_out == 'F':
      queryset = queryset.filter(worn_out=False)
      
    familiar = params.get('familiar', False)
    if familiar == 'T':
      queryset = queryset.filter(familiar=True)
    elif familiar == 'F':
      queryset = queryset.filter(familiar=False)
      
    order = params.get('order', False)
    if order and order=='place':
      queryset = queryset.order_by('race__place')
    elif order and order=='-place':
      queryset = queryset.order_by('-race__place')
    elif order:
      queryset = queryset.order_by(order)
    
    
    return queryset