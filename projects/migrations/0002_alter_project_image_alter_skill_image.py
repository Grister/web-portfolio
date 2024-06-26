# Generated by Django 5.0.4 on 2024-04-11 15:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('projects', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='project',
            name='image',
            field=models.ImageField(default='/projects_photos/default.png', upload_to='projects_photos'),
        ),
        migrations.AlterField(
            model_name='skill',
            name='image',
            field=models.ImageField(upload_to='skills_photos'),
        ),
    ]
