from django.db import models

# Create your models here.

class AccueilItem(models.Model):
    titre = models.CharField(max_length=100, blank=True, null=True)
    description = models.TextField(blank=True, null=True)
    image = models.ImageField(upload_to='images/', blank=False, null=False)

    def __str__(self):
        return self.titre