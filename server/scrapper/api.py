from rest_framework import serializers, viewsets

from . models import *


class SearchCreteriaSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = SearchCreteria
        fields = ("query", 'latitude', "search_titles_only", "longitude", "laundry", "parking", "has_image", "posted_today", "bundle_duplicates", "min_ft2", "max_ft2", "min_bathrooms", "max_bathrooms", "interest_point_coordinates", "min_price", "max_price", "parking", "has_image", "private_room", "private_room", "min_price", "max_price", "min_bedrooms", "max_bedrooms", "private_bath", "cats_ok", "dogs_ok", "no_smoking", "is_furnished", "wheelchair_acccess",
                  "housing_type")


class SearchCreteriaViewSet(viewsets.ModelViewSet):
    serializer_class = SearchCreteriaSerializer
    queryset = SearchCreteria.objects.all()


class PersonalSearchCreteriaSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = PersonalSearchCreteria
        fields = ("query", 'latitude', "search_titles_only", "longitude", "laundry", "parking", "has_image", "posted_today", "bundle_duplicates", "min_ft2", "max_ft2", "min_bathrooms", "max_bathrooms", "interest_point_coordinates", "min_price", "max_price", "parking", "has_image", "private_room", "private_room", "min_price", "max_price", "min_bedrooms", "max_bedrooms", "private_bath", "cats_ok", "dogs_ok", "no_smoking", "is_furnished", "wheelchair_acccess",
                  "housing_type")

    def create(self, validated_data):
        user = self.context["request"].user
        search_result = PersonalSearchCreteria.objects.create(
            user=user, **validated_data)
        return search_result


class PersonalSearchCreteriaViewSet(viewsets.ModelViewSet):
    serializer_class = PersonalSearchCreteriaSerializer
    queryset = PersonalSearchCreteria.objects.none()

    def get_queryset(self):
        user = self.request.user

        if user.is_anonymous:
            return PersonalSearchCreteria.objects.none()

        else:
            return PersonalSearchCreteria.objects.filter(user=user)


class SearchResultSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = SearchResult
        fields = ("query", 'latitude', "longitude", "laundry", "parking", "price", "bedrooms", "parking", "has_image", "private_room",
                  "private_bath", "cats_ok", "dogs_ok", "square_ft", "no_of_bathrooms", "no_smoking", "is_furnished", "wheelchair_acccess", "housing_type")


class SearchResultViewSet(viewsets.ModelViewSet):
    serializer_class = SearchResultSerializer
    queryset = SearchResult.objects.all()


class PersonalSearchResultSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = PersonalSearchResult
        fields = ("query", 'latitude', "longitude", "laundry", "parking", "price", "bedrooms", "parking", "has_image", "cats_ok", "dogs_ok", "square_ft", "no_of_bathrooms", "no_smoking", "is_furnished", "wheelchair_acccess",
                  "housing_type")

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
        fields = ("code", "name", "latitude", "longitude")

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
        fields = ("code", "name", "latitude", "area_key",
                  "area_name", "longitude", "country")


class CityNameViewSet(viewsets.ModelViewSet):
    serializer_class = CityNameSerializer
    queryset = CityName.objects.all()
