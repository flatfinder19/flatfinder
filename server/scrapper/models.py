from django.db import models
from django.contrib.auth.models import User
from uuid import uuid4

# Create your models here.


class CityName(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid4, editable=False)
    code = models.CharField(max_length=60, blank=False)
    name = models.CharField(max_length=60, blank=False)
    country = models.CharField(max_length=60, default="United States")
    latitude = models.CharField(max_length=60, blank=False)
    longitude = models.CharField(max_length=60, blank=False)
    created_at = models.DateTimeField(auto_now_add=True)
    last_modified = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f'<{self.__class__.__name__}: {self.name}>'


class SubAreaName(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid4, editable=False)
    code = models.CharField(max_length=10, blank=False)
    name = models.CharField(max_length=60, blank=False)
    description = models.TextField(blank=True)
    latitude = models.CharField(max_length=60, blank=False)
    longitude = models.CharField(max_length=60, blank=False)
    created_at = models.DateTimeField(auto_now_add=True)
    last_modified = models.DateTimeField(auto_now=True)
    city = models.ForeignKey(CityName, on_delete=models.CASCADE)

    def __str__(self):
        return f'<{self.__class__.__name__}: {self.code}>'


class UserCityName(CityName):
    user = models.ForeignKey(User, on_delete=models.CASCADE)


class UserSubAreaName(SubAreaName):
    user = models.ForeignKey(User, on_delete=models.CASCADE)


class SearchResult(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid4, editable=False)
    short_description = models.CharField(max_length=100)
    latitude = models.CharField(max_length=60, blank=False)
    longitude = models.CharField(max_length=60, blank=False)
    price = models.CharField(max_length=60, blank=True)
    bedrooms = models.IntegerField(blank=True)
    search_criteria = models.TextField(blank=False)
    created_at = models.DateTimeField(auto_now_add=True)
    last_modified = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f'<{self.__class__.__name__}: {self.short_description}>'


class PersonalSearchResult(SearchResult):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
