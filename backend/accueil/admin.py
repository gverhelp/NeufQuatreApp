from django.contrib import admin
from .models import AccueilItem
from django.core.exceptions import ValidationError
from django.contrib import messages

# Register your models here.

admin.site.site_header = "94 Admin"
admin.site.site_title = "94 Admin Portal"
admin.site.index_title = "Welcome to 94 Administration"

class AccueilItemAdmin(admin.ModelAdmin):
    list_display = ("titre", "created_at", "updated_at")

    def has_add_permission(self, request):
        # Autoriser l'ajout uniquement s'il y a moins de 2 objets
        if AccueilItem.objects.count() >= 2:
            return False
        return super().has_add_permission(request)
    
    def has_delete_permission(self, request, obj=None):
        # Empêche la suppression si on a seulement 2 objets
        if AccueilItem.objects.count() <= 2:
            return False
        return True

    def delete_model(self, request, obj):
        try:
            obj.delete()
        except ValidationError as e:
            self.message_user(request, str(e), level=messages.ERROR)

admin.site.register(AccueilItem, AccueilItemAdmin)