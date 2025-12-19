from django.shortcuts import render
from .api.serializers.serializers import BlogSerializer
from rest_framework.response import Response
from rest_framework.decorators import APIView, authentication_classes, permission_classes
from blog.models import  BlogModel
from rest_framework.authentication import SessionAuthentication, BaseAuthentication
from rest_framework.permissions import IsAuthenticatedOrReadOnly

@authentication_classes([SessionAuthentication, BaseAuthentication])
@permission_classes ([IsAuthenticatedOrReadOnly])
class blogview (APIView):
    def get (self, request):
        blog=BlogModel.objects.all()
        serializer=BlogSerializer(blog, many=True)
        return Response (serializer.data)
    def post (self, request):
        serializer=BlogSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)