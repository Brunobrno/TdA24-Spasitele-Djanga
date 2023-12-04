from django.shortcuts import render
from django.template import loader
# Create your views here.
from django.http import HttpResponse

def load_vizitka(request):
    template =loader.get_template('vizitka.html')
    return HttpResponse(template.render())