from django.urls import path, include
from accounts.api.viewsets.viewsets import UsersViewset
from rest_framework.routers import DefaultRouter
from rest_framework_simplejwt.views import TokenObtainPairView

#VIEWSET
router=DefaultRouter()
router.register('accounts', UsersViewset, basename='accounts')
urlpatterns = [
    path('', include(router.urls)),
    path('login/', TokenObtainPairView.as_view(), name='login'),
]

