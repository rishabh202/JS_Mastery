// String concatenation.
"use strict";

let firstName = "Rishabh";
let lastName = "Shukla";

// string concatenation 
let fullName = firstName + ' ' + lastName; 
console.log(fullName);

let string1 = '369';
let string2 = '108';
let sum = string1 + string2;   // obv since its a string it would all them as a string and not as a number
console.log(sum)
// if we want the sting to get added as numbers the obv, 
let $sum = +string1 + +string2;
console.log($sum);   // you can read the rules for naming variables once.
console.log(typeof sum); 
console.log(typeof $sum); // obv number as both are chnaged to number now