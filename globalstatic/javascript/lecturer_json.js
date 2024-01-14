function json_lecturer_load(){
    const jsonFile = document.currentScript.getAttribute('input-json');//proměnná je přímo v html souboru kde je uložená statická cesta k jsonu
    
    fetch(jsonFile)
      .then(response => response.json())//.then je operace která čeká na slib (zrovna tady je response.json)
      .then(data => {
        //document.getElementById("name").innerHTML = String(data.title_before + " " + data.first_name + " " + data.middle_name + " " + data.last_name + " " + data.title_after);
        
        document.getElementById("title_before").innerHTML = String(data.title_before);
        document.getElementById("first_name").innerHTML = String(data.first_name)
        document.getElementById("middle_name").innerHTML = String(data.middle_name)
        document.getElementById("last_name").innerHTML = String(data.last_name)
        document.getElementById("title_after").innerHTML = String(data.title_after)

        document.getElementById("lecturer_picture").src = String(data.picture_url);
        document.getElementById("location").innerHTML = String(data.location);
        document.getElementById("claim").innerHTML = String(data.claim);
        document.getElementById("bio").innerHTML = String(data.bio);

        document.getElementById("tag_name_0").innerHTML = String(data.tags[0].name);
        document.getElementById("tag_name_3").innerHTML = String(data.tags[3].name);
        document.getElementById("tag_name_7").innerHTML = String(data.tags[7].name);

        document.getElementById("price").innerHTML = String(data.price_per_hour);

        document.getElementById("telephone").innerHTML = String(data.contact.telephone_numbers[0]);
        document.getElementById("email").innerHTML = String(data.contact.emails[0]);
        /* MYSLEL JSEM ŽE SE MÁJÍ VYPSAT VŠECHNY TAGY ALE NAKONEC JENOM SPECIFICKÉ (NECHAL JSEM TUHLE ČÁST KÓDU PROTOŽE BY SE MOHL POUŽÍT BUDOUCNU)
        for (let i = 0; i < jsonData.tags.length; i++) {
          document.getElementById(String(data.tags[i].name)).innerHTML = String(data.tags[i].name);
        }*/



      })
  }
  json_lecturer_load();

/*function bio(){
  var bio = document.getElementById('bio');
  var bioText = document.getElementById('button_bio');
  while(true){
    bio.style.display="none";
    if( bioText.clicked == true){
      bioText.style.display= "none";
    }
  }
}*/