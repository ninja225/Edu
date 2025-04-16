from django.urls import path
from .views import RegisterView

# Import JWT views from the simplejwt package
from rest_framework_simplejwt.views import (
    TokenObtainPairView,     # For obtaining tokens after login
    TokenRefreshView         # For refreshing the access token
)

urlpatterns = [
    path('register/', RegisterView.as_view(), name='register'),  # POST request to register a new user
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),  # POST to login (get access/refresh tokens)
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),  # POST to refresh the access token
]
