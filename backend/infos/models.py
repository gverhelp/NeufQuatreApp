from django.db import models

# Create your models here.
class Info(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField(blank=True, null=True)
    image = models.ImageField(upload_to='infos-images/', blank=True, null=True)
    video = models.FileField(upload_to='infos-videos/', blank=True, null=True, help_text="Permet de uploader une vidéo et de l'afficher sur le site.") 
    videoLink = models.CharField(max_length=1000, blank=True, null=True, help_text="Permet de mettre un lien vidéo (YouTube ou autre) et de l'afficher sur le site. (Ne permet pas d'uploader une vidéo)")
    link = models.URLField(blank=True, null=True, help_text="Permet de mettre un lien vers une page d'information et de l'afficher sur le site.")
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title
    
class Document(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    file = models.FileField(upload_to='documents/')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title