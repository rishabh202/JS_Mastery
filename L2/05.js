"use strict";
// What happens to function expression

console.log(this);
console.log(window);
console.log(myFunc);
console.log("gap");
// myFunc();  // error deray obv
var myFunc = function() {
  console.log("This is my function");

}

console.log("hy");
console.log(myFunc);
myFunc();

// see function declaration me woh as a function store hora tha, 