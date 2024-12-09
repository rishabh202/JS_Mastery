"use strict";
// suppose we want to select an event. We know ki saare events ek document me pade hai

// select element using get element by id 

document.getElementById("main-heading");
// we can print it
console.log(document.getElementById("main-heading"));
// console.dir(document.getElementById("main-heading"));

// see apne ko aisa lgray h ki ye html element return krra hai, but aese nai hai, woh ek object return krray
console.dir(typeof document.getElementById("main-heading"));


const mainHeading = document.getElementById("main-heading");
console.log(mainHeading);