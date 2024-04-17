from django.urls import path

from main import views

app_name = 'main'

urlpatterns = [
    path('', views.IndexView.as_view(), name='short_index'),
    path('index/', views.IndexView.as_view(), name='index'),
]
