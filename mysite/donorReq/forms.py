from django import forms
from django.forms import ModelForm
from .models import DonorReq

class DonorReqForm(ModelForm):
    required_css_class = 'required'
    class Meta:
        model = DonorReq
        fields = [
            'name', 'address', 'phone', 'email','hospital','bloodGrp','reqstatus',
            'description', 'reqdate', 'priority', 'bags', 'reqdate'

        ]