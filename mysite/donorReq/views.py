from django.shortcuts import render
from django.http import  HttpResponseRedirect
from django.views.generic.list import ListView
from django.views.generic.detail import DetailView
from django.views.generic.edit import CreateView
from django.contrib.auth.forms import UserCreationForm
from django.urls import reverse_lazy



from.models import DonorReq
from .forms import DonorReqForm
from pages.models import Page

class Register(CreateView):
    template_name =  'registration/register.html'
    form_class = UserCreationForm
    success_url = reverse_lazy ('register-success')

    def form_valid(self, form):
        form.save()
        return HttpResponseRedirect(self.success_url)
        

class DonorList(ListView):
    model = DonorReq
    context_object_name= 'all_donors'

    def get_context_data(self, **kwargs): 
        context = super(DonorList, self).get_context_data(**kwargs)
        context['page_list'] = Page.objects.all()
        return context
class DonorView(DetailView):
    model = DonorReq
    context_object_name = 'donor'
    def get_context_data(self, **kwargs):
        context = super(DonorView, self).get_context_data(**kwargs)
        context['page_list'] = Page.objects.all()
        return context
         
def donor_req(request):
    submitted = False
    if request.method == 'POST':
        form = DonorReqForm(request.POST, request.FILES)
        if form.is_valid():
            form.save()
            return HttpResponseRedirect('/donor/?submitted=True')
    else:
        form = DonorReqForm()
        if 'submitted' in request.GET:
            submitted = True

    return render(request, 'donorReq/donor.html', {'form': form, 'page_list': Page.objects.all(), 'submitted': submitted})


# Create your views here.
