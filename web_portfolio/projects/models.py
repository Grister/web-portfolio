from django.db import models


class Project(models.Model):
    title = models.CharField(max_length=36)
    link = models.URLField()
    description = models.TextField(blank=True)
    image = models.ImageField(upload_to='media/projects_photos')


class Skill(models.Model):
    name = models.CharField(max_length=36)
    project = models.ForeignKey(Project, on_delete=models.CASCADE, related_name='skills')
    image = models.ImageField(upload_to='media/skills_photos')
