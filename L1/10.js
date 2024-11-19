"use strict";
// Truthy and Falsy Values


// truthy --> (All except falsy values) and falsy values --> (undefined, null, 0, "", false)  

let someName = ""; 
if (someName) {
    console.log(someName); 

} else {
  console.log('First name is kinda empty');   
}  // output -> else condition.

let someName1 = 0; 
if (someName1) {
    console.log(someName1); 

} else {
  console.log('First name is kinda empty');   
}

let someName2 = null; 
if (someName2) {
    console.log(someName2); 

} else {
  console.log('First name is kinda empty');   
}   //  similary false se bhi

let someName3 = "Adi, I am a truthy value"; // here Adi is a truthy value
if (someName3) {
    console.log(someName3); 

} else {
  console.log('First name is kinda empty');   
}

let someName4 = false; 
if (someName4) {
    console.log(someName4); 

} else {
  console.log('First name is kinda empty');   
}

// 

let someName5; 
if (someName5) {
    console.log(someName5); 

} else {
  console.log('First name is kinda empty');   
}


let someName6 = undefined; 
if (someName6) {
    console.log(someName6); 

} else {
  console.log('First name is kinda empty');   
}