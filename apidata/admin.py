from django.contrib import admin
from apidata.models import Place, Race, Face

# Register your models here.
class PlaceAdmin(admin.ModelAdmin):
  list_display = ('name', 'races', 'faces')
  
class RaceAdmin(admin.ModelAdmin):
  list_display = ('name', 'place', 'faces')
  
class FaceAdmin(admin.ModelAdmin):
  list_display = ('name', 'race', 'place')

admin.site.register(Place, PlaceAdmin)
admin.site.register(Race, RaceAdmin)
admin.site.register(Face, FaceAdmin)