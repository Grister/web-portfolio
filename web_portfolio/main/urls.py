from django.urls import path

from main import views

app_name = 'main'

urlpatterns = [
    path("", views.UserListAPIView.as_view(), name="short_index"),
    path("index/", views.UserListAPIView.as_view(), name="index"),
]
