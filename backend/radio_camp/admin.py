from django.contrib import admin
from .models import RadioCamp, Post, Photo, Video

class PhotoInline(admin.TabularInline):
    model = Photo
    extra = 1
    
class VideoInline(admin.TabularInline):
    model = Video
    extra = 1

class PostAdmin(admin.ModelAdmin):
    inlines = [PhotoInline, VideoInline]
    list_display = ['title', 'radio_camp', 'date']
    list_filter = ['radio_camp__section']

admin.site.register(RadioCamp)
admin.site.register(Post, PostAdmin)