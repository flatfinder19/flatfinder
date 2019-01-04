"""flatfinder URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include,path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include, re_path
from rest_framework import routers, generics
from rest_framework.authtoken import views

from scrapper.api import *
from rest_framework_jwt.views import obtain_jwt_token, verify_jwt_token, refresh_jwt_token
from django.conf import settings
from django.views.static import serve
from django.conf.urls import url
from scrapper.views import UserList, UpdatePassword

router = routers.DefaultRouter()
router.register(r'cities', CityNameViewSet)
router.register(r'usercities', UserCityNameViewSet)
router.register(r'usersubareas', UserSubAreaNameViewSet)
router.register(r'personalsearches', PersonalSearchResultViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
    #re_path(r'^api-token-auth/', views.obtain_auth_token)
    re_path(r'^api-token-auth/', obtain_jwt_token),
    re_path(r'^api-token-verify/', verify_jwt_token),
    path('auth/', include('scrapper.urls')),
    url('^api/passwordchange/', UpdatePassword.as_view()),
    re_path(r'^api-token-refresh/', refresh_jwt_token),
]
