from django.contrib import admin
from . models import DonorReq


class DonorReqAdmin(admin.ModelAdmin):
    list_display = ('name','submitted','reqdate','bags','priority','hospital','bloodGrp','phone')
    list_filter = ('submitted','reqdate')
    readonly_fields =('submitted',)
    fieldsets = (
        (None,{
            'fields': ('name','email','description')
        }),
        ('Contact Information', {
            'classes': ('collapse',), 
            'fields': ( 'address', 'phone', 'hospital')
        }),
        ('Request Information',{
            'classes': ('collapse',), 
            'fields': ('reqstatus','priority','reqDetails','submitted','bloodGrp')
           
         }), 
        ('donor Admin', {
            'classes': ('collapse',),
            'fields': ('reqdate','bags','username')
            
        }),
    )
admin.site.register(DonorReq ,DonorReqAdmin)
# Register your models here.
