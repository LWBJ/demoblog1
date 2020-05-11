from rest_framework import serializers
from apidata.models import Place, Race, Face

class PlaceSerializer(serializers.HyperlinkedModelSerializer):
  race_set = serializers.HyperlinkedRelatedField(many=True, read_only=True, view_name='race-detail')
  race_set_list = serializers.SerializerMethodField()
  face_set_list = serializers.SerializerMethodField()

  class Meta:
    model = Place
    fields = ['url','name','race_set_list','race_set','face_set_list', 'worn_out']
    
  def get_race_set_list(self, obj):
    set = []
    for i in obj.race_set.all():
      set.append(str(i))
    return set
    
  def get_face_set_list(self, obj):
    set = []
    for i in obj.race_set.all():
      for j in i.face_set.all():
        set.append(str(j))
    
    return set
    
class RaceSerializer(serializers.HyperlinkedModelSerializer):
  face_set = serializers.HyperlinkedRelatedField(many=True, read_only=True, view_name='face-detail')
  face_set_list = serializers.SerializerMethodField()
  place_text = serializers.SerializerMethodField()

  class Meta:
    model = Race
    fields = ['url','name','date','face_set_list','face_set','place_text','place']
    
  def get_face_set_list(self, obj):
    set = []
    for i in obj.face_set.all():
      set.append(str(i))
    
    return set
    
  def get_place_text(self, obj):
    return str(obj.place)
    
class FaceSerializer(serializers.HyperlinkedModelSerializer):
  race_text = serializers.SerializerMethodField()
  place_text = serializers.SerializerMethodField()

  class Meta:
    model = Face
    fields = ['url','name','race_text','race','place_text', 'worn_out', 'familiar']
    
  def get_race_text(self, obj):
    return str(obj.race)
    
  def get_place_text(self, obj):
    return str(obj.race.place)