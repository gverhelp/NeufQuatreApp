from django.db import models
from django.core.exceptions import ValidationError

# Create your models here.

class AccueilItem(models.Model):
    titre = models.CharField(max_length=100, blank=True, null=True)
    description = models.TextField(blank=True, null=True)
    image = models.ImageField(upload_to='images/', blank=False, null=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.titre
    
    def clean(self):
        if not self.pk and AccueilItem.objects.count() >= 2:
            # Interdire la création si déjà 2 objets existent
            raise ValidationError("Il existe déjà 2 Accueil Items. Vous ne pouvez en avoir que 2 à la fois.")
        
    def delete(self, *args, **kwargs):
        if AccueilItem.objects.count() <= 2:
            raise ValidationError("Impossible de supprimer cet élément : il doit toujours y avoir au moins 2 Accueil Items.")
        super().delete(*args, **kwargs)

    def save(self, *args, **kwargs):
        self.full_clean()  # Appelle clean() avant de sauvegarder
        super().save(*args, **kwargs)
        
        
class AccueilButton(models.Model):
    link = models.CharField(max_length=200, blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        if self.pk == 1:
            return "Bouton d'inscription"
        return "Bouton de contact"

    def clean(self):
        if not self.pk and AccueilButton.objects.count() >= 2:
            # Interdire la création si déjà 2 objets existent
            raise ValidationError("Il existe déjà 2 Accueil Button. Vous ne pouvez en avoir que 2 à la fois.")
        
    def delete(self, *args, **kwargs):
        if AccueilItem.objects.count() <= 2:
            raise ValidationError("Impossible de supprimer cet élément : il doit toujours y avoir au moins 2 Accueil Items.")
        super().delete(*args, **kwargs)
        
    def save(self, *args, **kwargs):
        self.full_clean()  # Appelle clean() avant de sauvegarder
        super().save(*args, **kwargs)