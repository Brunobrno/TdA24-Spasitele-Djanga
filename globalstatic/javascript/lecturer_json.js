function json_lecturer_load(){
    const jsonFile = document.currentScript.getAttribute('input-json');//proměnná je přímo v html souboru kde je uložená statická cesta k jsonu
    
    fetch(jsonFile)
      .then(response => response.json())//.then je operace která čeká na slib (zrovna tady je response.json)
      .then(data => {
        document.getElementById("name").innerHTML = String(data.title_before + " " + data.first_name + " " + data.middle_name + " " + data.last_name + " " + data.title_after);
        document.getElementById("lecturer_picture").src = String(data.picture_url);
        document.getElementById("location").innerHTML = String(data.location);
        document.getElementById("claim").innerHTML = String(data.claim);
        document.getElementById("bio").innerHTML = String(data.bio);

        document.getElementById("tag_name_0").innerHTML = String(data.tags[0].name);
        document.getElementById("tag_name_3").innerHTML = String(data.tags[3].name);
        document.getElementById("tag_name_7").innerHTML = String(data.tags[7].name);
        /* MYSLEL JSEM ŽE SE MÁJÍ VYPSAT VŠECHNY TAGY ALE NAKONEC JENOM SPECIFICKÉ (NECHAL JSEM TUHLE ČÁST KÓDU PROTOŽE BY SE MOHL POUŽÍT BUDOUCNU)
        for (let i = 0; i < jsonData.tags.length; i++) {
          document.getElementById(String(data.tags[i].name)).innerHTML = String(data.tags[i].name);
        }*/



      })
  }
  
  json_lecturer_load();
  