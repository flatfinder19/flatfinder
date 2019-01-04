from rest_framework import serializers, viewsets

from . models import *


class PersonalSearchResultSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = PersonalSearchResult
        fields = ("short_description", "bedrooms", "search_criteria")

    def create(self, validated_data):
        user = self.context["request"].user
        search_result = PersonalSearchResult.objects.create(
            user=user, **validated_data)
        return search_result


class PersonalSearchResultViewSet(viewsets.ModelViewSet):
    serializer_class = PersonalSearchResultSerializer
    queryset = PersonalSearchResult.objects.none()

    def get_queryset(self):
        user = self.request.user

        if user.is_anonymous:
            return PersonalSearchResult.objects.none()

        else:
            return PersonalSearchResult.objects.filter(user=user)


class UserCityNameSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = UserCityName
        fields = ("code", "name", "latitude", "longitude", "country")

    def create(self, validated_data):
        user = self.context["request"].user
        city_name = UserCityName.objects.create(
            user=user, **validated_data)
        return city_name


class UserCityNameViewSet(viewsets.ModelViewSet):
    serializer_class = UserCityNameSerializer
    queryset = UserCityName.objects.none()

    def get_queryset(self):
        user = self.request.user

        if user.is_anonymous:
            return UserCityName.objects.none()

        else:
            return UserCityName.objects.filter(user=user)


class UserSubAreaNameSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = UserSubAreaName
        fields = ("code", "name", "latitude", "longitude", "country")

    def create(self, validated_data):
        user = self.context["request"].user
        subarea_name = UserSubAreaName.objects.create(
            user=user, **validated_data)
        return subarea_name


class UserSubAreaNameViewSet(viewsets.ModelViewSet):
    serializer_class = UserSubAreaNameSerializer
    queryset = UserSubAreaName.objects.none()

    def get_queryset(self):
        user = self.request.user

        if user.is_anonymous:
            return UserSubAreaName.objects.none()

        else:
            return UserSubAreaName.objects.filter(user=user)


class CityNameSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = CityName
        fields = ("code", "name", "latitude", "longitude", "country")

    '''
    def create(self, validated_data):
        user = self.context["request"].user
        subarea_name = CityName.objects.create(
            user=user, **validated_data)
        return subarea_name
    '''


class CityNameViewSet(viewsets.ModelViewSet):
    serializer_class = CityNameSerializer
    queryset = CityName.objects.all()
    '''
    def get_queryset(self):
        user = self.request.user

        if user.is_anonymous:
            return CityName.objects.none()

        else:
            return CityName.objects.filter(user=user)
'''
