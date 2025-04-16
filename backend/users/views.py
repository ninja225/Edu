from django.shortcuts import render
from rest_framework import generics
from .serializers import RegisterSerializer
from django.contrib.auth.models import User
from .models import MyUser


class RegisterView(generics.CreateAPIView):
    # `CreateAPIView` is a DRF class that provides a POST endpoint for creating a new object (in this case, a user).
    queryset = MyUser.objects.all()  # We define the queryset here, though it isn't necessary for this view
    serializer_class = RegisterSerializer  # This view uses the RegisterSerializer to validate and create a new user.

