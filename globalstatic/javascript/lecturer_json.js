function json_lecturer_load(){
    const jsonFile = document.currentScript.getAttribute('input-json');//proměnná je přímo v html souboru kde je uložená statická cesta k jsonu
    
    fetch(jsonFile)
      .then(response => response.json())//.then je operace která čeká na slib (zrovna tady je response.json)
      .then(data => {
        document.getElementById("test").innerHTML = String(data.location);
      })
  }
  
  json_lecturer_load();
  