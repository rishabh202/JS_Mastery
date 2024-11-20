"use strict";
// clone array and spread operator

// But if, we do like this(below) then obv they are diff arrays 
let array1 = ['', 'd', 'g']; 
let array2 = ['', 'd', 'g']; 
console.log(array1===array2); 
let array11 = ['a', 'b', 'c']; 
let array22 = array11; 
console.log(array11===array22);
 
array1.push("369"); 
console.table(array1); 
console.table(array2); 

// (note if we slice array one of the method to clone array, obv as we know slice with also give a separate array)
let array3 = array1.slice(0); 
console.table(array3); 

// how to clone array another way (as ki obv ek naya array bane)
let array4 = [].concat(array1); 
console.table(array4); 
console.log(array1===array4); //false obv // another way to clone is by using spread operator (...)

let array5 = [...array1]; 
console.table(array5);
console.log(array1===array5); //false

// now lets say you want to make a clone of array5 and then you also want some more elements in clonned one
let array8 = (array5.slice(0).concat(["Tesla", "Adi", "philosophy"])); 
console.table(array8); 
let lastArray = [...array8, ...array1]; 
console.table(lastArray);