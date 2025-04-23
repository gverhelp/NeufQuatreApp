from django.contrib import admin
from .models import Section, SectionImage, Chef

# Register your models here.
class SectionImageInline(admin.TabularInline):
    model = SectionImage
    extra = 1
    
class SectionAdmin(admin.ModelAdmin):
    inlines = [SectionImageInline]
    list_display = ['name', 'bankAccount', 'email']
    search_fields = ['name', 'email']
    readonly_fields = ("slug",)
    
class ChefAdmin(admin.ModelAdmin):
    list_display = ['name', 'totem', 'phoneNumber', 'section']
    search_fields = ['name', 'totem', 'section__name']
    list_filter = ['section']

admin.site.register(Section, SectionAdmin)
admin.site.register(Chef, ChefAdmin)