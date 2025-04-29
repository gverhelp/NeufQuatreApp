from django.db import models
from sections.models import Section
from django.core.exceptions import ValidationError

# Create your models here.
class Event(models.Model):
    title = models.CharField(max_length=100, blank=False, null=False)
    description = models.TextField(blank=True, null=True)
    start_time = models.DateTimeField(blank=False, null=False)
    end_time = models.DateTimeField(blank=False, null=False)
    location = models.CharField(max_length=100, blank=True, null=True)
    section = models.ForeignKey(Section, on_delete=models.CASCADE, related_name='events', null=False, blank=False)
    highlight = models.BooleanField(default=False)

    def __str__(self):
        return self.title
    
    
class AgendaDocument(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField(blank=True, null=True)
    file = models.FileField(upload_to='agenda_files/')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title

    def clean(self):
        if not self.pk and AgendaDocument.objects.exists():
            # Si une instance existe déjà, on empêche la création d'une nouvelle
            raise ValidationError("Il existe déjà un document Agenda. Vous ne pouvez en ajouter qu'un seul.")

    def save(self, *args, **kwargs):
        self.full_clean()  # Appelle clean() avant de sauvegarder
        super().save(*args, **kwargs)
        