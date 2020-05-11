from django.db import models

# Create your models here.
class Place(models.Model):
  name = models.CharField(max_length=100, unique=True)
  worn_out = models.BooleanField()
  
  class Meta:
    ordering = ['name']
  
  def __str__(self):
    return self.name
  
  def races(self):
    set = []
    for i in self.race_set.all():
      set.append(i)
    return set
    
  def faces(self):
    set = []
    for i in self.race_set.all():
    
      for j in i.face_set.all():
        set.append(j)
      
    return set
  
class Race(models.Model):
  name = models.CharField(max_length=100, unique=True)
  place = models.ForeignKey(Place, on_delete=models.SET_NULL, null=True)
  date = models.DateField()
  
  class Meta:
    ordering = ['name']
    
  def __str__(self):
    return self.name
    
  def faces(self):
    set = []
    for i in self.face_set.all():
      set.append(i)
    return set
    
class Face(models.Model):
  name = models.CharField(max_length=100, unique=True)
  race = models.ForeignKey(Race, on_delete=models.SET_NULL, null=True)
  worn_out = models.BooleanField()
  familiar = models.BooleanField()
  
  class Meta:
    ordering = ['name']
    
  def __str__(self):
    return self.name
    
  def place(self):
    return self.race.place