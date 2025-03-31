from django.db import models


# Create your models here.
class Section(models.Model):
    name = models.CharField(max_length=100, blank=False, null=False)
    description = models.TextField(blank=True, null=True)
    bankAccount = models.CharField(max_length=100, blank=True, null=True)
    email = models.EmailField(max_length=100, blank=True, null=True)
    filled = models.IntegerField(default=0, blank=True, null=True)

    def __str__(self):
        return self.name
    
class SectionImage(models.Model):
    title = models.CharField(max_length=100, blank=True, null=True)
    image = models.ImageField(upload_to='images/', blank=False, null=False)
    section = models.ForeignKey(Section, on_delete=models.CASCADE, blank=False, null=False)
    
    def __str__(self):
        return f"Image de {self.section.name}"
    
    
class Chef(models.Model):
    name = models.CharField(max_length=100, blank=False, null=False)
    totem = models.CharField(max_length=100, blank=True, null=True)
    bafouille = models.TextField(blank=True, null=True)
    image = models.ImageField(upload_to='images/', blank=True, null=True)
    phoneNumber = models.CharField(max_length=100, blank=True, null=True)
    section = models.ForeignKey(Section, on_delete=models.CASCADE, blank=False, null=False)
    
    def __str__(self):
        return self.name
