from django.contrib import admin
from .models import Event, AgendaDocument

# Register your models here.
class EventAdmin(admin.ModelAdmin):
    list_display = ['title', 'start_time', 'end_time', 'section', 'highlight']
    search_fields = ['title', 'section__name', 'start_time', 'end_time', 'location']
    list_filter = ['start_time', 'end_time', 'section']
    list_editable = ['highlight']
    ordering = ['start_time']
    date_hierarchy = 'start_time'
    
admin.site.register(Event, EventAdmin)
admin.site.register(AgendaDocument)
