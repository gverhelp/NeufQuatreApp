from django.contrib import admin
from .models import Section, SectionImage, Chef

# Register your models here.
admin.site.register(Section)
admin.site.register(SectionImage)
admin.site.register(Chef)