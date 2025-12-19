from rest_framework import viewsets
from django.contrib.auth.models import User
from accounts.api.serializers.serializers import UserSerializer
from rest_framework.permissions import IsAuthenticated, AllowAny

class UsersViewset(viewsets.ModelViewSet):

    queryset=User.objects.all()
    serializer_class=UserSerializer

    def get_permissions(self):
        if self.action == 'create':
            return [AllowAny()]
        return [IsAuthenticated()]
