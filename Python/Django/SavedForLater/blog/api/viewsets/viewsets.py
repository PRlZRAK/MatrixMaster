from rest_framework import viewsets
from blog.api.serializers.serializers import BlogSerializer
from blog.models import  BlogModel
from rest_framework.authentication import SessionAuthentication, BaseAuthentication
from rest_framework.permissions import IsAuthenticatedOrReadOnly, AllowAny

class BlogViewset(viewsets.ModelViewSet):
    permission_classes=[AllowAny]
    queryset=BlogModel.objects.all()
    serializer_class=BlogSerializer