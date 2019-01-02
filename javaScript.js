/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
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