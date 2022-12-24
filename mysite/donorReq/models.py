from django.db import models
from django.contrib.auth.models import User

STATUS_CHOICES = (
    ('NEW', 'New request'),
    ('Ex', 'Existing request'),
)

PRIORITY_CHOICES = (
    ('U', 'Urgent - 1 hour or less'),
    ('N', 'Normal - 2 to 4 hours'),
    ('L', 'Low - 24 hours'),
)

class DonorReq(models.Model):
    name = models.CharField(max_length=100)
    address = models.CharField(max_length=200, blank=True)
    phone = models.CharField(max_length=30, blank=True)
    email = models.EmailField()
    hospital = models.CharField(max_length=20 , blank=True)
    description = models.TextField()
    reqstatus = models.CharField(max_length=20, choices=STATUS_CHOICES)
    priority = models.CharField(max_length=40, choices=PRIORITY_CHOICES)
    reqDetails = models.FileField(upload_to='uploads/', blank=True)
    submitted = models.DateField(auto_now_add=True)
    reqdate = models.DateField(blank=True, null=True)
    bags = models.DecimalField(decimal_places=2, max_digits=7, blank=True, default=0)
    username = models.ForeignKey(User, blank=True, null=True, on_delete=models.CASCADE)
    bloodGrp = models.CharField(max_length=20 , blank=True)

    def __str__(self):
        return str(self.id)



# Create your models here.
