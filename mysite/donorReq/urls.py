from django.urls import path
from .import views
from .views import DonorList,DonorView

urlpatterns = [
    path ('',views.donor_req, name='donor-request'),
    path ('show/<int:pk>', DonorView.as_view(), name= 'donor-detail'),
    path ('show',DonorList.as_view(), name='showdonors'),
]