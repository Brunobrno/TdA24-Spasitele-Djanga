from django.shortcuts import render
from django.template import loader
# Create your views here.
import json

def load_vizitka(request):
    with open('globalstatic/jsonFiles/lecturer.json') as f:
        data = json.load(f)
    template = 'ucitel.html'
    return render(request, template)