from django.contrib import admin
from . models import *


class LatitudeLongitudeAdmin(admin.ModelAdmin):
    readonly_fields = ("id", 'created_at', 'updated_at')


class PersonalLatitudeLongitudeAdmin(admin.ModelAdmin):
    readonly_fields = ('created_at', 'updated_at')


admin.site.register(LatitudeLongitude, LatitudeLongitudeAdmin)
admin.site.register(PersonalLatitudeLongitude,
                    PersonalLatitudeLongitudeAdmin)


class CityNameAdmin(admin.ModelAdmin):
    readonly_fields = ('created_at', 'updated_at')


class PersonalCityNameAdmin(admin.ModelAdmin):
    readonly_fields = ('created_at', 'updated_at')


admin.site.register(CityName, CityNameAdmin)
admin.site.register(PersonalCityName, PersonalCityNameAdmin)


class SubAreaNameAdmin(admin.ModelAdmin):
    readonly_fields = ('created_at', 'updated_at')


class PersonalSubAreaNameAdmin(admin.ModelAdmin):
    readonly_fields = ('created_at', 'updated_at')


admin.site.register(SubAreaName, SubAreaNameAdmin)
admin.site.register(PersonalSubAreaName, PersonalSubAreaNameAdmin)


class SearchCreteriaAdmin(admin.ModelAdmin):
    readonly_fields = ('created_at', 'updated_at')


class PersonalSearchCreteriaAdmin(admin.ModelAdmin):
    readonly_fields = ('created_at', 'updated_at')


admin.site.register(SearchCreteria, SearchCreteriaAdmin)
admin.site.register(PersonalSearchCreteria, PersonalSearchCreteriaAdmin)


class SearchResultAdmin(admin.ModelAdmin):
    readonly_fields = ('created_at', 'updated_at')


class PersonalSearchResultAdmin(admin.ModelAdmin):
    readonly_fields = ('created_at', 'updated_at')


admin.site.register(SearchResult, SearchResultAdmin)
admin.site.register(PersonalSearchResult, PersonalSearchResultAdmin)
