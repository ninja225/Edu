from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import AllowAny

# Create your views here.

class TestAPIView(APIView):
    permission_classes = [AllowAny]
    
    def get(self, request):
        return Response({
            "message": "API is working!",
            "status": "success"
        })
