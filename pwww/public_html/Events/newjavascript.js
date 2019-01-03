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

 function formValidation1()                                    
{ 
    var name = document.forms["form2"]["Name"];               
    var email = document.forms["form2"]["EMail"];    
    var phone = document.forms["form2"]["Telephone"];  
    var selecti =  document.forms["form2"]["Subject"];  
    var password = document.forms["form2"]["Password"];  
    var address = document.forms["form2"]["Address"];  
   
    if (name.value === "")                                  
    { 
        window.alert("Please enter your name."); 
       
        return false; 
    } 
   
    if (address.value === "")                               
    { 
        window.alert("Please enter your address."); 
    
        return false; 
    } 
       
    if (email.value === "")                                   
    { 
        window.alert("Please enter a valid e-mail address."); 
        
        return false; 
    } 
   
    if (email.value.indexOf("@", 0) < 0)                 
    { 
        window.alert("Please enter a valid e-mail address."); 
     
        return false; 
    } 
   
    if (email.value.indexOf(".", 0) < 0)                 
    { 
        window.alert("Please enter a valid e-mail address."); 
      
        return false; 
    } 
   
    if (phone.value === "")                           
    { 
        window.alert("Please enter your telephone number."); 
     
        return false; 
    } 
   
    if (password.value === "")                        
    { 
        window.alert("Please enter your password"); 
         
        return false; 
    } 
   
    if (selecti.selectedIndex < 1)                  
    { 
        alert("Please enter your nominee."); 
    
        return false; 
    } 
   
    return true; 
}
    
    
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
