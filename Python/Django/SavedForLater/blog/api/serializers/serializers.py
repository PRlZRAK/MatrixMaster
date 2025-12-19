from rest_framework import serializers
from blog.models import BlogModel

# class BlogSerializer(serializers.Serializer):
#       BlogTitle=serializers.CharField()
#       content=serializers.CharField()

class BlogSerializer(serializers.ModelSerializer):
    class Meta:
        model=BlogModel
        fields='__all__'