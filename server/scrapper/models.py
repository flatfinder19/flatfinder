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
    latitude = models.CharField(max_length=60, blank=False)
    longitude = models.CharField(max_length=60, blank=False)
    price = models.CharField(max_length=60, blank=True)
    bedrooms = models.IntegerField(blank=True)
    query = models.TextField(blank=True)
    laundry = models.BooleanField(default=False)
    parking = models.BooleanField(default=False)
    has_image = models.BooleanField(default=False)
    private_room = models.BooleanField(default=False)
    private_bath = models.BooleanField(default=False)
    cats_ok = models.BooleanField(default=False)
    dogs_ok = models.BooleanField(default=False)
    price = models.CharField(max_length=60, blank=True)
    square_ft = models.CharField(max_length=60, blank=True)
    no_of_bathrooms = models.IntegerField(blank=True)
    no_smoking = models.BooleanField(default=False)
    is_furnished = models.BooleanField(default=False)
    wheelchair_acccess = models.BooleanField(default=False)
    housing_type = models.CharField(max_length=200, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    last_modified = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f'<{self.__class__.__name__}: {self.short_description}>'


class PersonalSearchResult(SearchResult):
    user = models.ForeignKey(User, on_delete=models.CASCADE)


class SearchCreteria(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid4, editable=False)
    query = models.TextField(blank=False)
    laundry = models.BooleanField(default=False)
    parking = models.BooleanField(default=False)
    interest_point_coordinates = models.CharField(max_length=200,)
    latitude = models.CharField(max_length=60, blank=False)
    longitude = models.CharField(max_length=60, blank=False)
    search_titles_only = models.BooleanField(default=False)
    has_image = models.BooleanField(default=True)
    posted_today = models.BooleanField(default=False)
    bundle_duplicates = models.BooleanField(default=True)
    private_room = models.BooleanField(default=True)
    private_bath = models.BooleanField(default=True)
    cats_ok = models.BooleanField(default=True)
    dogs_ok = models.BooleanField(default=True)
    min_price = models.CharField(max_length=60, blank=True)
    max_price = models.CharField(max_length=60, blank=True)
    min_ft2 = models.CharField(max_length=60, blank=True)
    max_ft2 = models.CharField(max_length=60, blank=True)
    min_bedrooms = models.IntegerField(blank=True)
    max_bedrooms = models.IntegerField(blank=True)
    min_bathrooms = models.IntegerField(blank=True)
    max_bathrooms = models.IntegerField(blank=True)
    no_smoking = models.BooleanField(default=True)
    is_furnished = models.BooleanField(default=False)
    wheelchair_acccess = models.BooleanField(default=False)
    housing_type = models.CharField(max_length=200, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    last_modified = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f'<{self.__class__.__name__}: lat: {self.latitude}, long: {self.longitude}>'


class PersonalSearchCreteria(SearchCreteria):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
