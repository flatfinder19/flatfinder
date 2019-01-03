from rest_framework import serializers, viewsets

from . models import PersonalSearchResult


class PersonalSearchResultSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = PersonalSearchResult
        fields = ("short_description", "bedrooms", "search_criteria")

    def create(self, validated_data):
        user = self.context["request"].user
        search_result = PersonalSearchResult.ojects.create(
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
