from django.urls import path
from . import views

urlpatterns = [
    path('api/', views.load_index, name='api'),
    path('', views.load_index, name='index'),
]