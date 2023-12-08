from django.urls import path
from . import views
from api_app.views import load_api
from vizitka.views import load_vizitka

urlpatterns = [
    path('', views.load_info, name='index'),
    path('api/', load_api, name='api'),
    path('lecturer/', load_vizitka, name='index'),
]