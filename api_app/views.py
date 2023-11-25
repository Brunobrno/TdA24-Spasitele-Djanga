# Create your views here.
from django.shortcuts import render
from django.template import loader
from django.http import HttpResponse

def load_api(request):
    template = loader.get_template('api_index.html')
    return HttpResponse(template.render())