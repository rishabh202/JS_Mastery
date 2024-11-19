"use strict";

// boolean and comparison operators  (booleans means either true or false, 0 = false and 1 = true)
let num1 = 25; 
let num2 = 25; 
console.log(num1>num2); 
console.log(num1>=num2); 
// In Js == checks only value not the datatype, but === checks value as well as datatype
let num3 = '85'; 
let num4 = 85;
console.log(num3 == num4, num3 === num4);  
// Now we check for whether it is equal or not, now for whether it is not equal to or not. != means not equal to (ignores datatype) while !== (considers datatype); 
console.log(num3 != num4, num3 !== num4);  // false, true

// if else 
let usersAge = 19; 
if (usersAge >= 18) {
    console.log('You are eligible'); 
} else {
    console.log('You are not eligible'); 
}

let something = 36;
let somethingg = "3";

if (something%2===0) {
    console.log('The number is even'); 
} else {
    console.log('The number is odd'); 
}

// while operating js coverts that string to number and then operates
if (somethingg%2===0) {
    console.log('The number is even'); 
} else {
    console.log('The number is odd'); 
}

console.log(typeof something);
console.log(typeof somethingg);