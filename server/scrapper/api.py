from rest_framework import serializers, viewsets
from django.contrib.auth.models import User
from . models import *

# Serializers define the API representation.


# expose the user fields
class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ["id", "username", "email", "password"]
        extra_kwargs = {"password": {"write_only": True, "required": True}}

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        return user


class UserViewset(viewsets.ModelViewSet):
    serializer_class = UserSerializer
    queryset = User.objects.all()

# exposes the latitude longitude fields


class LatitudeLongitudeSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = LatitudeLongitude
        fields = ["id", "latitude", "longitude", "created_at", "updated_at"]


# Will display the latitude longitude fields
class LatitudeLongitudeViewset(viewsets.ModelViewSet):
    serializer_class = LatitudeLongitudeSerializer
    queryset = LatitudeLongitude.objects.all()


# exposes the personal latitude longitude. Also links the user to the latitude longitude
class PersonalLatitudeLongitudeSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = PersonalLatitudeLongitude
        fields = ["id", "latitude", "longitude", "created_at", "updated_at"]

    def create(self, validated_data):
        # import pdb; pdb.set_trace() # for debugging
        user = self.context['request'].user
        city = PersonalLatitudeLongitude.objects.create(
            user=user, **validated_data)
        return city


# exposes the city name fields
class CityNameSerializer(serializers.ModelSerializer):

    class Meta:
        model = CityName
        fields = ["name", "site", "latitude_longitude_id",
                  "area_key", "area_name", "county", "state", "country"]


# Will display the city name fields
class CityNameViewset(viewsets.ModelViewSet):
    serializer_class = CityNameSerializer
    queryset = CityName.objects.all()


# exposes the personal city name. Also links the user to the city
class PersonalCityNameSerializer(serializers.ModelSerializer):
    class Meta:
        model = PersonalCityName
        fields = ["name", "site",  "area_name", "latitude_longitude_id",
                  "county", "state", "country", "created_at", "updated_at"]

    def create(self, validated_data):
        # import pdb; pdb.set_trace() # for debugging
        user = self.context['request'].user
        city = PersonalCityName.objects.create(
            user=user, **validated_data)
        return city


# will display the fields to show and also the fields to create
class PersonalCityNameViewset(viewsets.ModelViewSet):
    serializer_class = PersonalCityNameSerializer
    queryset = PersonalCityName.objects.none()

    def get_queryset(self):
        user = self.request.user

        if user.is_anonymous:
            return PersonalCityName.objects.none()
        else:
            return PersonalCityName.objects.filter(user=user)


# will expose the subarea name fields
class SubAreaNameSerializer(serializers.ModelSerializer):
    class Meta:
        model = SubAreaName
        fields = ["name", "description", "latitude_longitude_id",
                  "city_id", "created_at", "updated_at"]


# will display the subarea fields
class SubAreaNameViewset(viewsets.ModelViewSet):
    serializer_class = SubAreaNameSerializer
    queryset = SubAreaName.objects.all()


# will expose the personal subarea fields
class PersonalSubAreaNameSerializer(serializers.ModelSerializer):
    class Meta:
        model = SubAreaName
        fields = ["name", "description", "latitude_longitude_id",
                  "city_id", "created_at", "updated_at"]

    def create(self, validated_data):
        # import pdb; pdb.set_trace()  # for debugging
        user = self.context['request'].user
        subarea = PersonalSubAreaName.objects.create(
            user=user, **validated_data)
        return subarea


# Will display the personal subarea fields
class PersonalSubAreaNameViewset(viewsets.ModelViewSet):
    serializer_class = PersonalSubAreaNameSerializer
    queryset = PersonalSubAreaName.objects.none()

    def get_queryset(self):
        user = self.request.user

        if user.is_anonymous:
            return PersonalSubAreaName.objects.none()
        else:
            return PersonalSubAreaName.objects.filter(user=user)


# will expose the search creteria fields
class SearchCreteriaSerializer(serializers.ModelSerializer):
    class Meta:
        model = SearchCreteria
        fields = ["query", "laundry", "parking", "latitude_longitude_id",
                  "search_titles_only", "has_image", "posted_today", "bundle_duplicates",
                  "private_room", "private_bath", "cats_ok", "dogs_ok",
                  "min_price", "max_price", "min_ft", "max_ft", "min_bedrooms", "max_bedrooms",
                  "min_bathrooms", "max_bathrooms", "no_smoking", "is_furnished", "wheelchair_access",
                  "housing_type", "created_at", "updated_at"]


# will display the search creteria fields
class SearchCreteriaViewset(viewsets.ModelViewSet):
    serializer_class = SearchCreteriaSerializer
    queryset = SearchCreteria.objects.all()


class PersonalSearchCreteriaSerializer(serializers.ModelSerializer):
    class Meta:
        model = PersonalSearchCreteria
        fields = ["query", "laundry", "parking", "latitude_longitude_id",
                  "search_titles_only", "has_image", "posted_today", "bundle_duplicates",
                  "private_room", "private_bath", "cats_ok", "dogs_ok",
                  "min_price", "max_price", "min_ft", "max_ft", "min_bedrooms", "max_bedrooms",
                  "min_bathrooms", "max_bathrooms", "no_smoking", "is_furnished", "wheelchair_access",
                  "housing_type", "created_at", "updated_at"]

    def create(self, validated_data):
        # import pdb; pdb.set_trace()  # for debugging
        user = self.context['request'].user
        search_creteria = PersonalSearchCreteria.objects.create(
            user=user, **validated_data)
        return search_creteria


# Will display the personal search creteria fields
class PersonalSearchCreteriaViewset(viewsets.ModelViewSet):
    serializer_class = PersonalSearchCreteriaSerializer
    queryset = PersonalSearchCreteria.objects.none()

    def get_queryset(self):
        user = self.request.user

        if user.is_anonymous:
            return PersonalSearchCreteria.objects.none()
        else:
            return PersonalSearchCreteria.objects.filter(user=user)


# will expose the search result fields
class SearchResultSerializer(serializers.ModelSerializer):
    class Meta:
        model = SearchResult
        fields = ["latitude_longitude_id", "latitude_longitude_id",
                  "bedrooms", "image", "url", "laundry",
                  "laundry", "parking", "has_image", "private_room", "private_bath", "cats_ok", "dogs_ok",
                  "price", "square_ft", "no_of_bathrooms", "no_smoking", "is_furnished", "wheelchair_access",
                  "housing_type", "created_at", "updated_at"]


# will display the search result fields
class SearchResultViewset(viewsets.ModelViewSet):
    serializer_class = SearchResultSerializer
    queryset = SearchResult.objects.all()


# will expose the personal search result fields
class PersonalSearchResultSerializer(serializers.ModelSerializer):
    class Meta:
        model = PersonalSearchResult
        fields = ["latitude_longitude_id", "latitude_longitude_id",
                  "bedrooms", "image", "url", "laundry",
                  "laundry", "parking", "has_image", "private_room", "private_bath", "cats_ok", "dogs_ok",
                  "price", "square_ft", "no_of_bathrooms", "no_smoking", "is_furnished", "wheelchair_access",
                  "housing_type", "created_at", "updated_at"]

    def create(self, validated_data):
        # import pdb; pdb.set_trace()  # for debugging
        user = self.context['request'].user
        search_result = PersonalSearchResult.objects.create(
            user=user, **validated_data)
        return search_result


# Will display the personal search result fields
class PersonalSearchResultViewset(viewsets.ModelViewSet):
    serializer_class = PersonalSearchResultSerializer
    queryset = PersonalSearchResult.objects.none()

    def get_queryset(self):
        user = self.request.user

        if user.is_anonymous:
            return PersonalSearchResult.objects.none()
        else:
            return PersonalSearchResult.objects.filter(user=user)
