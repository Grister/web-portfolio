from django.contrib import admin
from .models import Project, Skill


@admin.register(Project)
class ProductModelAdmin(admin.ModelAdmin):
    ...


@admin.register(Skill)
class ProductModelAdmin(admin.ModelAdmin):
    ...
