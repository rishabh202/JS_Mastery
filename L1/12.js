"use strict";

// ternary operator or condition operator (Imp)

let umar = 12;
let $drink = umar>=12 ? 'coffee' : 'milk'; 
console.log($drink); 

let age = 22;
age = 21;
let eligibility = age>=21 ? "Yes" : "No";
console.log(eligibility);

let marks = 89; 
let result = marks>45 ? "Pass" : "No";
console.log(result);

// 
function getFee(isMember) {
    return isMember ? '$2.00' : '$10.00';
  }
  
  console.log(getFee(true));
  // Expected output: "$2.00"
  
  console.log(getFee(false));
  // Expected output: "$10.00"
  
  console.log(getFee(null));
  // Expected output: "$10.00"

