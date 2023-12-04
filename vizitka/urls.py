from django.urls import path
from . import views
from api_app.views import load_api

urlpatterns = [
    path('', views.load_vizitka, name='index'),
    path('api/', load_api, name='api'),
]