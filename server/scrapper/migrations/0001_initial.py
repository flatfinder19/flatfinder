# Generated by Django 2.1.4 on 2019-01-04 00:01

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion
import uuid


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='CityName',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('code', models.CharField(max_length=10)),
                ('name', models.CharField(max_length=60)),
                ('country', models.CharField(default='United States', max_length=60)),
                ('latitude', models.CharField(max_length=60)),
                ('longitude', models.CharField(max_length=60)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('last_modified', models.DateTimeField(auto_now=True)),
            ],
        ),
        migrations.CreateModel(
            name='SearchResult',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('short_description', models.CharField(max_length=100)),
                ('latitude', models.CharField(max_length=60)),
                ('longitude', models.CharField(max_length=60)),
                ('price', models.CharField(blank=True, max_length=60)),
                ('bedrooms', models.IntegerField(blank=True)),
                ('search_criteria', models.TextField()),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('last_modified', models.DateTimeField(auto_now=True)),
            ],
        ),
        migrations.CreateModel(
            name='SubAreaName',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('code', models.CharField(max_length=10)),
                ('name', models.CharField(max_length=60)),
                ('description', models.TextField(blank=True)),
                ('latitude', models.CharField(max_length=60)),
                ('longitude', models.CharField(max_length=60)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('last_modified', models.DateTimeField(auto_now=True)),
            ],
        ),
        migrations.CreateModel(
            name='PersonalSearchResult',
            fields=[
                ('searchresult_ptr', models.OneToOneField(auto_created=True, on_delete=django.db.models.deletion.CASCADE, parent_link=True, primary_key=True, serialize=False, to='scrapper.SearchResult')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
            bases=('scrapper.searchresult',),
        ),
        migrations.CreateModel(
            name='UserCityName',
            fields=[
                ('cityname_ptr', models.OneToOneField(auto_created=True, on_delete=django.db.models.deletion.CASCADE, parent_link=True, primary_key=True, serialize=False, to='scrapper.CityName')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
            bases=('scrapper.cityname',),
        ),
        migrations.CreateModel(
            name='UserSubAreaName',
            fields=[
                ('subareaname_ptr', models.OneToOneField(auto_created=True, on_delete=django.db.models.deletion.CASCADE, parent_link=True, primary_key=True, serialize=False, to='scrapper.SubAreaName')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
            bases=('scrapper.subareaname',),
        ),
        migrations.AddField(
            model_name='subareaname',
            name='city',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='scrapper.CityName'),
        ),
    ]
