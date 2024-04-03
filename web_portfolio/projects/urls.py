import views
from django.urls import path


app_name = 'projects'

urlpatterns = [
    path("projects/", views.ProjectListView.as_view(), name="project-list"),
]
