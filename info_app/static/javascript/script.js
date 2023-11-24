function json_cake_load(){
    const jsonFile = "{% static 'jsonFiles/cake.json' %}";

  fetch(jsonFile)
    .then(response => response.json())
    .then(data => {
      console.log(data);
    })
}

json_cake_load();
