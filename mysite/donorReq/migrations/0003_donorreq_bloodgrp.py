# Generated by Django 4.1.1 on 2022-12-23 19:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('donorReq', '0002_remove_donorreq_web_donorreq_hospital'),
    ]

    operations = [
        migrations.AddField(
            model_name='donorreq',
            name='bloodGrp',
            field=models.CharField(blank=True, max_length=20),
        ),
    ]
