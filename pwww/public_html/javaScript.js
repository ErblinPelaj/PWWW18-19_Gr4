/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
 var now = new Date();
        var hour = now.getHours();

        if ( hour < 12 )
        document.body.background = "bacck.jpg";
        if ( hour >= 12 )
        {
        hour = hour - 12;
        if ( hour < 6 )
        document.body.background = "b.jpg";
        if ( hour >= 6 )
        document.body.background = "c.jpg";
        } 

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
var ora = document.getElementById("hour");
ora.innerHTML = "Ora eshte: "+ timeformat(date);


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



