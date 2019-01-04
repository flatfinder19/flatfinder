from django.contrib import admin
from . models import *


# class CityNameAdmin(admin.ModelAdmin):
#     readonly_fields = ("created_at", 'last_modified')


# class SubAreaNameAdmin(admin.ModelAdmin):
#     readonly_fields = ("created_at", 'last_modified')


class SearchResultAdmin(admin.ModelAdmin):
    readonly_fields = ("created_at", 'last_modified')


# Register your models here.
admin.site.register(
    (SearchResult, PersonalSearchResult), )

# Register your models here.
admin.site.register(
    (CityName, UserCityName),)


# Register your models here.
admin.site.register(
    (SubAreaName, UserSubAreaName))


admin.site.register(
    (SearchCreteria, PersonalSearchCreteria,))
