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
    
class AgendaDocumentAdmin(admin.ModelAdmin):
    list_display = ['title', 'created_at', 'updated_at']
    
    def has_add_permission(self, request):
        # Autoriser l'ajout uniquement s'il n'y a pas d'objets
        if AgendaDocument.objects.count() >= 1:
            return False
        return super().has_add_permission(request)
    
admin.site.register(Event, EventAdmin)
admin.site.register(AgendaDocument, AgendaDocumentAdmin)
