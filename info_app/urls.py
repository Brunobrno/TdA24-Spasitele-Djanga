from django.urls import path
from . import views

urlpatterns = [
    path('', views.info_index, name='info_index'),
]