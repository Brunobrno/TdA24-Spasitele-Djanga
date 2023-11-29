import os
import json
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.contrib.staticfiles import finders


def load_api(request):
    # Read JSON data from a file
    json_file_path = finders.find('jsonFiles/cake.json')
    
    with open(json_file_path, 'r') as json_file:
        data = json.load(json_file)

    # Use JsonResponse to send JSON response
    return JsonResponse(data)