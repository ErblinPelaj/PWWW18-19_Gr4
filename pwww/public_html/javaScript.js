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



