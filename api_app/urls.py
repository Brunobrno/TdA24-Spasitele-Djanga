from django.urls import path
from . import views
from info_app.views import load_info

urlpatterns = [
    path('/', load_info, name='index'),
    path('api/', views.load_api, name='api'),
]