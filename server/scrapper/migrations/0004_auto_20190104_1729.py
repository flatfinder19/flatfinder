# Generated by Django 2.1.4 on 2019-01-04 17:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('scrapper', '0003_personalsearchcreteria_searchcreteria'),
    ]

    operations = [
        migrations.AddField(
            model_name='cityname',
            name='area_key',
            field=models.CharField(blank=True, max_length=60),
        ),
        migrations.AddField(
            model_name='cityname',
            name='area_name',
            field=models.CharField(blank=True, max_length=60),
        ),
    ]
