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
    
class RadioCampAdmin(admin.ModelAdmin):
    list_display = ['title', 'section', 'start_date', 'end_date']
    search_fields = ['title', 'section__name']
    list_filter = ['section']

admin.site.register(RadioCamp, RadioCampAdmin)
admin.site.register(Post, PostAdmin)