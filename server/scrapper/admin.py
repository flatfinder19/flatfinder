from django.contrib import admin
from . models import SearchResults, PersonalSearchResult


class SearchResultAdmin(admin.ModelAdmin):
    readonly_fields = ("created_at", 'last_modified')


# Register your models here.
admin.site.register((SearchResults, PersonalSearchResult), SearchResultAdmin)
