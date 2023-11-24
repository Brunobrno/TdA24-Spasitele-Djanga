function json_cake_load(){
  const jsonFile = document.currentScript.getAttribute('input-json');
  
  fetch(jsonFile)
    .then(response => response.json())//.then je operace která čeká na slib (zrovna tady je response.json)
    .then(data => {
      console.log(data);
      console.log(data.secret);
      document.getElementById("json-print").innerHTML = String(data.secret);
    })
}

json_cake_load();
