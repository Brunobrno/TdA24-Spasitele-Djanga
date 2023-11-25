from django.shortcuts import render
from django.template import loader
# Create your views here.
from django.http import HttpResponse

def load_info(request):
    template = loader.get_template('info_index.html')
    return HttpResponse(template.render())