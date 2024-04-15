from django.views.generic import ListView

from projects.models import Project
from common.views import TitleMixin


# Create your views here.
class ProjectListView(TitleMixin, ListView):
    model = Project
    title = 'Projects'
    context_object_name = 'projects'
    template_name = 'projects/projects.html'
    paginate_by = 4
