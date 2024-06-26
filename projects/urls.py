from django.urls import path
from projects import views


app_name = 'projects'

urlpatterns = [
    path("projects/", views.ProjectListView.as_view(), name="project-list"),
    path("progects/page/<int:page>", views.ProjectListView.as_view(), name="paginator"),
]
