from django.contrib import admin
from .models import RadioCamp, Post, Photo

class PhotoInline(admin.TabularInline):
    model = Photo
    extra = 1

class PostAdmin(admin.ModelAdmin):
    inlines = [PhotoInline]
    list_display = ['title', 'radio_camp', 'date']
    list_filter = ['radio_camp__section']

admin.site.register(RadioCamp)
admin.site.register(Post, PostAdmin)