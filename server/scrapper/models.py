from django.db import models
from django.contrib.auth.models import User
from uuid import uuid4

# Create your models here.


class LatitudeLongitude(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid4, editable=False)
    latitude = models.CharField(max_length=60, blank=False)
    longitude = models.CharField(max_length=60, blank=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f'<{self.__class__.__name__}: (latitude: {self.latitude}, longitude: {self.longitude})>'


class PersonalLatitudeLongitude(LatitudeLongitude):
    user = models.ForeignKey(User, on_delete=models.CASCADE)


class CityName(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid4, editable=False)
    site = models.CharField(max_length=60, blank=False)
    name = models.CharField(max_length=60, blank=False)
    latitude_longitude_id = models.ForeignKey(
        LatitudeLongitude, on_delete=models.CASCADE)
    county = models.CharField(max_length=60, blank=True)
    state = models.CharField(max_length=60, blank=True)
    country = models.CharField(max_length=60, default="United States")
    area_key = models.CharField(max_length=60, blank=True)
    area_name = models.CharField(max_length=60, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f'<{self.__class__.__name__}: {self.name}>'


class PersonalCityName(CityName):
    user = models.ForeignKey(User, on_delete=models.CASCADE)


class SubAreaName(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid4, editable=False)
    name = models.CharField(max_length=60, blank=False)
    description = models.TextField(blank=True)
    city_id = models.ForeignKey(
        CityName, on_delete=models.CASCADE)
    latitude_longitude_id = models.ForeignKey(
        LatitudeLongitude, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f'<{self.__class__.__name__}: {self.name}>'


class PersonalSubAreaName(SubAreaName):
    user = models.ForeignKey(User, on_delete=models.CASCADE)


class SearchCreteria(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid4, editable=False)
    latitude_longitude_id = models.ForeignKey(
        LatitudeLongitude, on_delete=models.CASCADE)
    query = models.TextField(blank=True)
    laundry = models.BooleanField(default=False)
    parking = models.BooleanField(default=False)
    search_titles_only = models.BooleanField(default=False)
    has_image = models.BooleanField(default=True)
    posted_today = models.BooleanField(default=False)
    bundle_duplicates = models.BooleanField(default=True)
    private_room = models.BooleanField(default=True)
    private_bath = models.BooleanField(default=True)
    cats_ok = models.BooleanField(default=True)
    dogs_ok = models.BooleanField(default=True)
    min_price = models.CharField(max_length=60, default=500)
    max_price = models.CharField(max_length=60, default=1000)
    min_ft = models.CharField(max_length=60, blank=True)
    max_ft = models.CharField(max_length=60, blank=True)
    min_bedrooms = models.IntegerField(default=1)
    max_bedrooms = models.IntegerField(default=2)
    min_bathrooms = models.IntegerField(default=1)
    max_bathrooms = models.IntegerField(default=2)
    no_smoking = models.BooleanField(default=True)
    is_furnished = models.BooleanField(default=False)
    wheelchair_access = models.BooleanField(default=False)
    housing_type = models.CharField(max_length=200, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f'<{self.__class__.__name__}: lat: {self.latitude}, long: {self.longitude}>'


class PersonalSearchCreteria(SearchCreteria):
    user = models.ForeignKey(User, on_delete=models.CASCADE)


class SearchResult(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid4, editable=False)
    latitude_longitude_id = models.ForeignKey(
        LatitudeLongitude, on_delete=models.CASCADE)
    search_creteria_id = models.ForeignKey(
        SearchCreteria, on_delete=models.CASCADE)
    price = models.CharField(max_length=60, blank=True)
    bedrooms = models.IntegerField(default=1)
    url = models.URLField(blank=True)
    image = models.CharField(max_length=200, blank=True)
    laundry = models.BooleanField(default=False)
    parking = models.BooleanField(default=False)
    has_image = models.BooleanField(default=False)
    private_room = models.BooleanField(default=False)
    private_bath = models.BooleanField(default=False)
    cats_ok = models.BooleanField(default=False)
    dogs_ok = models.BooleanField(default=False)
    price = models.CharField(max_length=60, blank=True)
    square_ft = models.CharField(max_length=60, blank=True)
    no_of_bathrooms = models.IntegerField(default=1)
    no_smoking = models.BooleanField(default=False)
    is_furnished = models.BooleanField(default=False)
    wheelchair_access = models.BooleanField(default=False)
    housing_type = models.CharField(max_length=200, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f'<{self.__class__.__name__}: (lat: {self.latitude}, long: {self.longitude})>'


class PersonalSearchResult(SearchResult):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
