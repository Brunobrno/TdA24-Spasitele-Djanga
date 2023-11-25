from django.urls import path
from . import views

urlpatterns = [
    path('', views.load_index, name='index'),
    path('api/', views.load_index, name='api'),
]