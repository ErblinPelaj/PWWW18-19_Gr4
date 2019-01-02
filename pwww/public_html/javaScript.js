/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
 var now = new Date();
        var hour = now.getHours();

        if ( hour < 12 )
        document.body.background = "b.jpg";
        if ( hour >= 12 )
        {
        hour = hour - 12;
        if ( hour < 6 )
        document.body.background = "bacck.jpg";
        if ( hour >= 6 )
        document.body.background = "c.jpg";
        } 

function formValidation() {
 
   var name;
   var email;
   var subject;
 
   name = document.getElementById("emri");
  email = document.getElementById("email");
  subject = document.getElementById("subjekti");
 
   try {
    if(name.value === ""){
    throw "Please write your name";
   }
 
    if(email.value === ""){
    throw "Please enter a valid e-mail address";
   }
 
    if(subject.value === ""){
     throw "Please write the subject";
   }
 
    document.getElementById("mainForm").submit();
 
  }
   catch (error) {
    alert(error);
  }
 
  }

 function changes(){
 var stars =["Bryan Cranston",	
"Anna Gunn",	
"Aaron Paul",
"Dean Norris",
"Betsy Brandt",	 
"RJ Mitte",	 
"Bob Odenkirk",
"Steven Michael Quezada", 
"Jonathan Banks",
"Giancarlo Esposito",
"Charles Baker"];

document.getElementById("bBad").innerHTML = stars;
}

 function changes1(){
 var stars =["Rainn Wilson",	
"John Krasinski",	
"Jenna Fischer",	
"Leslie David Baker",	
"Brian Baumgartner",	
"Angela Kinsey",	
"Phyllis Smith",	
"Kate Flannery",	
"Creed Bratton",	
"Oscar Nuñez",	
"B.J. Novak"];
document.getElementById("office").innerHTML = stars;
}

function changes2(){
 var stars= ["Peter Dinklage",	
"Lena Headey",	
"Emilia Clarke",
"Kit Harington",	
"Sophie Turner",	
"Maisie Williams",	
"Nikolaj Coster-Waldau",	
"Iain Glen",	 
"Alfie Allen",	
"John Bradley",	
"Aidan Gillen",	
"Conleth Hill"];

document.getElementById("gth").innerHTML = stars;
}



var actors = [
  "Jennifer Lawrence",
  "Johnny Depp",
  "Angelina Jolie",
   "Marlon Brando",
  "Robert De Niro",
  "Leonardo DiCaprio",
   "Morgan Freeman",
  "Brad Pitt",
  "Tom Cruise"];
  
  
  
var second = {
  firstName : "Jennifer",
  lastName  : "Lawrence",
  age     : 28,
  eyeColor  : "blue"
};

var third = {
  firstName : "Leonardo",
  lastName  : "DiCaprio",
  age     : 44,
  eyeColor  : "blue"
};

var first = {
  firstName : "Meryl",
  lastName  : "Strep",
  age     : 69,
  eyeColor  : "grey"
};

// Display some data from the object:
document.getElementById("f").innerHTML =
first.firstName + " " + first.lastName + " is " + first.age + " years old.";
document.getElementById("s").innerHTML =
second.firstName + " " + second.lastName +  " is " + second.age + " years old.";
document.getElementById("th").innerHTML =
third.firstName +  " " + third.lastName + " is " + third.age + " years old.";



