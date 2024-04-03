from django.urls import path

from contacts import views

app_name = 'contacts'

urlpatterns = [
    path("contact_me/", views.UserListAPIView.as_view(), name="contacts"),
]
