/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function formValidation() {
 
   var movie, regisor, actor;
 
   movie = document.getElementById("fmovie");
   regisor = document.getElementById("fregisor");
  actor = document.getElementById("factor");
 
   try {
    if(movie.value === ""){
    throw "Please write the top rated movie";
   }
 
    if(regisor.value === ""){
    throw "Please write the best regisor of your choice";
   }
 
    if(actor.value === ""){
     throw "Please write the best actor/acctress of your choice";
   }
 
    document.getElementById("bestf").submit();
 
  }
   catch (error) {
    alert(error);
  }
 
  }











var show = document.getElementById("location");

function lokacioni() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, showError);
  } else { 
    show.innerHTML = "Geolocation nuk mbeshtetet nga ky browser";
  }
}

function showPosition(position) {
  show.innerHTML = "Gjeresia: " + position.coords.latitude + 
  "<br>Gjatesia: " + position.coords.longitude;
}

function showError(error) {
  switch(error.code) {
    case error.PERMISSION_DENIED:
      show.innerHTML = "Perdoruesi refuzoj kerkesen per Geolocation.";
      break;
    case error.POSITION_UNAVAILABLE:
      show.innerHTML = "Informacioni per lokacion nuk mund te qaset";
      break;
    case error.TIMEOUT:
      show.innerHTML = "Ka kaluar koha per kerkesen e lokacionit";
      break;
    case error.UNKNOWN_ERROR:
      show.innerHTML = "Ka ndodhur gabim i panjohur";
      break;
  }
}
