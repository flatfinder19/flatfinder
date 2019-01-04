from django.shortcuts import render
from django.shortcuts import render
from django.http import HttpResponseRedirect
from django.contrib.auth.models import User, Group
from rest_framework import permissions, status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.views import APIView
from django.db.models.signals import post_save
from django.dispatch import receiver
from .serializers import UserSerializer, UserSerializerWithToken, ChangePasswordSerializer

from rest_framework import generics

from django.db.models import Sum


from django.views.generic.list import ListView
# Create your views here.


# Create your views here.
@api_view(['GET'])
def current_user(request):
    """
    Determine the current user by their token, and return their data
    """

    def get(self, request, format=Json):
        serializer = UserSerializerWithToken(data=request.data)
        if serializer.is_valid():
            return Response(serializer.data)


class UserList(APIView):
    """
    Create a new user. It's called 'UserList' because normally we'd have a get
    method here too, for retrieving a list of all User objects.
    """

    permission_classes = (permissions.AllowAny,)

    def post(self, request, format=None):
        serializer = UserSerializerWithToken(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    '''
    @receiver(post_save, sender=User)
    def create_user_profile(sender, instance, created, **kwargs):
        if created:
            instance.groups.add(Group.objects.get(name=''))
'''


class UpdatePassword(APIView):
    """
    An endpoint for changing password.
    """
    permission_classes = (permissions.IsAuthenticated, )

    def get_object(self, queryset=None):
        return self.request.user

    def put(self, request, *args, **kwargs):
        self.object = self.get_object()
        serializer = ChangePasswordSerializer(data=request.data)

        if serializer.is_valid():
            # Check old password
            old_password = serializer.data.get("old_password")
            if not self.object.check_password(old_password):
                return Response({"old_password": ["Wrong password."]},
                                status=status.HTTP_422_UNPROCESSABLE_ENTITY)
            # set_password also hashes the password that the user will get
            self.object.set_password(serializer.data.get("new_password"))
            self.object.save()
            return Response(status=status.HTTP_204_NO_CONTENT)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
