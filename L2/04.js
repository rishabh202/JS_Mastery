"use strict";
// Function Hoisting
// What happens to function expression

console.log(this);
console.log(window);
console.log(myFunc);
console.log("gap");
function myFunc() {
  console.log("This is my function");

}

console.log("hy");
myFunc();