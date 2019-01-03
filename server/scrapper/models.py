from django.db import models
from django.contrib.auth.models import User
from uuid import uuid4

# Create your models here.
'''
   class UserCities (models.Model):
       id = models.UUIDField(primary_key=True, default=uuid4, editable=False)
       name = models.CharField(max_length=100)
       user = models.ForeignKey(User, on_delete=models.CASCADE)

         latitude = models.DecimalField(
             decimal_places=6, max_digits=None, blank=False)
         longitude = models.DecimalField(
             decimal_places=6, max_digits=None, blank=False)
'''


class SearchResults(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid4, editable=False)
    short_description = models.CharField(max_length=100)
    '''
    latitude = models.DecimalField(
        decimal_places=6, max_digits=None, blank=False)
    longitude = models.DecimalField(
        decimal_places=6, max_digits=None, blank=False)

    price = models.DecimalField(decimal_places=2, max_digits=None, blank=True)
    '''
    bedrooms = models.IntegerField(blank=True)
    search_criteria = models.TextField(blank=False)
    created_at = models.DateTimeField(auto_now_add=True)
    last_modified = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f'<{self.__class__.__name__}: {self.id} {self.short_description}>'


class PersonalSearchResult(SearchResults):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
