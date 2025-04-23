from django.contrib import admin
from .models import AccueilItem

# Register your models here.

admin.site.site_header = "94 Admin"
admin.site.site_title = "94 Admin Portal"
admin.site.index_title = "Welcome to 94 Administration"
admin.site.register(AccueilItem)