from django.urls import path, include
from blog.api.viewsets.viewsets import BlogViewset
from rest_framework.routers import DefaultRouter
from blog.views import blogview

#VIEWSET
router=DefaultRouter()
router.register('blog', BlogViewset, basename='blog')
urlpatterns = [
    path('', include(router.urls)),
]

#VIEW
# urlpatterns = [
#     path('blog/', blogview.as_view() , name = 'blogview'),
# ]
