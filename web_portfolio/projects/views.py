from django.shortcuts import render
from django.views.generic import ListView

from projects.models import Project


# Create your views here.
class ProjectListView(ListView):
    model = Project
    context_object_name = 'projects'
    template_name = 'products/products.html'
    paginate_by = 3


# class IndexView(TitleMixin, TemplateView):
#     template_name = 'products/index.html'
#     title = 'Store'
