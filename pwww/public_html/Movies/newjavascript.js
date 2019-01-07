


/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


 function timeformat(date) 
{
  var h = date.getHours();
  var m = date.getMinutes();
  var x = h >= 12 ? 'pm' : 'am';
  h = h % 12;
  h = h ? h : 12;
  m = m < 10 ? '0'+m: m;
  var mytime= h + ':' + m + ' ' + x;
  return mytime;
}

var date = new Date();
var ora = document.getElementById("hours");
ora.innerHTML = "The time: "+ timeformat(date);

let actors = [
  "Jennifer Lawrence",
  "Johnny Depp",
  "Angelina Jolie",
   "Marlon Brando",
  "Robert De Niro",
  "Leonardo DiCaprio",
   "Morgan Freeman",
  "Brad Pitt",
  "Tom Cruise"];
  
  
  var itr=0;
 function nom()
 { 
let nominnes = { first : actors[3], second : actors[4],  
                      third : actors[5], fourth : actors[6]}; 

 for (itr in nominnes)  
    { 
        var nom = document.getElementById("nom1");
nom.innerHTML = "Nominimet per ket vit jane "+ (nominnes[itr] + " , ");
        
    } 
 }


let profesioni="actor";





  function formValidation2()                                    
{ 
    var name = document.forms["form3"]["Name"];               
    var email = document.forms["form3"]["Email"];    
    var phone = document.forms["form3"]["Subject"];  
  
    if (name.value === "")                                  
    { 
        window.alert("Please enter your name."); 
       
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
    return true; 
}



function Actors(first, last, year) {
  this.firstName = first;
  this.lastName = last;
  this.year = year;
  
}

Actors.prototype.award = "Gala";

var actor = new Actors("Gary", "Oldman", 2018);
document.getElementById("demo").innerHTML =
"The actor who won an award at " + actor.award + " is " + actor.firstName;



function Directors(first, last, year) {
  this.firstName = first;
  this.lastName = last;
  this.year = year;
  
}

Directors.prototype.name = function() 
{
  return this.firstName + " " + this.lastName;
};


var director = new Directors("Guillermo", "del Toro", 2018);
document.getElementById("demo1").innerHTML =
"The director who won an award at Gala is " + director.name();
 
 
 
 

function Sup(first, last, year) {
  this.firstName = first;
  this.lastName = last;
  this.year = year;
  
}

Sup.prototype.award = "Gala";

var suport = new Sup("Allison", "Janney", 2018);
document.getElementById("demo2").innerHTML =
"The best supporting actress who won an award at " + suport.award + " is " + suport.firstName;


function formValidation() {
 
   var movie;
   var regisor;
   var actor;
 
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
  alert( "Gjeresia: " + position.coords.latitude + 
  " dhe Gjatesia: " + position.coords.longitude);
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
