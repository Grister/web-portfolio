from django.views.generic import TemplateView

from common.views import TitleMixin


# Create your views here.
class IndexView(TitleMixin, TemplateView):
    template_name = 'main/index.html'
    title = "Main page"
