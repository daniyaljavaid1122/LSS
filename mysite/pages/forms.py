from django import forms

class ContactForm (forms.Form):
    yourname = forms.CharField (max_length=100,label='Your Name')
    email = forms.EmailField (required=False, label='Your email address')
    address = forms.CharField (max_length=150)
    number = forms.CharField( max_length=15,label='your contact number')
    group= forms.CharField (max_length=10,label='your blood group')
    
