from django.contrib import admin
from .models import Info, Document

# Register your models here.
class InfoAdmin(admin.ModelAdmin):
    list_display = ['title', 'created_at', 'updated_at']
    search_fields = ['title']
    list_filter = ['created_at', 'updated_at']
    ordering = ['-created_at']

class DocumentAdmin(admin.ModelAdmin):
    list_display = ['title', 'created_at', 'updated_at']
    search_fields = ['title']
    list_filter = ['created_at', 'updated_at']
    ordering = ['-created_at']
    
admin.site.register(Info, InfoAdmin)
admin.site.register(Document, DocumentAdmin)