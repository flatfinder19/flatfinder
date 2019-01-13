from django.urls import path, include, re_path
from rest_framework import routers
from . import views
from . api import UserViewset, CityNameViewset, PersonalCityNameViewset, SubAreaNameViewset, PersonalSubAreaNameViewset, SearchCreteriaViewset, PersonalSearchCreteriaViewset, SearchResultViewset, PersonalSearchResultViewset

router = routers.DefaultRouter()
# PROTECT THIS ROUTE: TODOD
router.register(r"users", UserViewset)


router.register(r"cities", CityNameViewset)
router.register(r"personal-cities", PersonalCityNameViewset)
router.register(r"subareas", SubAreaNameViewset)
router.register(r"personal-subareas", PersonalSubAreaNameViewset)
router.register(r"search-creterias", SearchCreteriaViewset)
router.register(r"personal-search-creteria", PersonalSearchCreteriaViewset)
router.register(r"search-results", SearchResultViewset)
router.register(r"personal-search-results", PersonalSearchResultViewset)

urlpatterns = [
    path("", views.index, name="index")
]
