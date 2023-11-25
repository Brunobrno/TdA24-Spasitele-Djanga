import json
def display_Json():
    f = open('data.json')

    data = json.load(f)

    for i in data['emp_details']:
        print(i)
    
    # Closing file
    f.close()
