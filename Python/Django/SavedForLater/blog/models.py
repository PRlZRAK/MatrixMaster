from django.db import models

# Create your models here.
class BlogModel(models.Model):
    BlogTitle=models.CharField()
    BlogBody=models.CharField()