"use strict";
// If else statement

let someName = "-1"; 
if (someName) {
    console.log(someName); 

} else {
  console.log('First name is kinda empty');   
}    // etc etc lol 

let umar = 12; 
let drink; 

if (umar>10 ) {
    drink = 'coffee'; 
} else {
    drink = 'milk'; 
}
console.log(drink); 

// let umar = 6; // error, cannot redeclare, but u can change obv.
umar = 6; 
if (umar>10 ) {
    drink = 'coffee'; 
} else {
    drink = 'milk'; 
}
console.log(drink);