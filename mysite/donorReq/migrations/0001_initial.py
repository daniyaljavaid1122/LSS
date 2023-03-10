# Generated by Django 4.1.1 on 2022-12-11 15:59

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='DonorReq',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('address', models.CharField(blank=True, max_length=200)),
                ('phone', models.CharField(blank=True, max_length=30)),
                ('email', models.EmailField(max_length=254)),
                ('web', models.URLField(blank=True)),
                ('description', models.TextField()),
                ('reqstatus', models.CharField(choices=[('NEW', 'New request'), ('Ex', 'Existing request')], max_length=20)),
                ('priority', models.CharField(choices=[('U', 'Urgent - 1 hour or less'), ('N', 'Normal - 2 to 4 hours'), ('L', 'Low - 24 hours')], max_length=40)),
                ('reqDetails', models.FileField(blank=True, upload_to='uploads/')),
                ('submitted', models.DateField(auto_now_add=True)),
                ('reqdate', models.DateField(blank=True, null=True)),
                ('bags', models.DecimalField(blank=True, decimal_places=2, default=0, max_digits=7)),
                ('username', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
