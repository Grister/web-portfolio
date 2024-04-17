from django.views.generic import TemplateView

from common.views import TitleMixin


class ContactsView(TitleMixin, TemplateView):
    template_name = 'contacts/contacts.html'
    title = "Contact me"
