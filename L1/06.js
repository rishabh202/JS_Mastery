// typeof and conversion of types

"use strict";


let age = 21; 
let anotherName = 'Tesla';
console.log(typeof age); 
console.log(typeof anotherName);
console.log(typeof 'x'); 
console.log(typeof 369); 
console.log(" "); 



// a trick to change number to string 
age = age + '';  // string concatenation hogya; + se string concatenation hotay.
console.log(typeof age); 
console.log(" "); 

// trick to change string to number
anotherName = +anotherName; 
console.log(typeof anotherName);
console.log(" "); 

// another method (better practice)
let sankhya = 108; 
console.log(typeof sankhya); 
sankhya = String(sankhya); 
console.log(typeof sankhya); 
console.log(" "); 

let something = '11'; 
console.log(typeof something); 
something = Number(something); 
console.log(typeof something); 
