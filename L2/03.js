"use strict";
console.log(this);
console.log(window);
console.log(myFunc);
console.log(fulllName);

console.log("gap");
function myFunc() {
  console.log("This is my function");

}

console.log(fulllName);
var fulllName = "this is Fuolllname"
console.log(fulllName);

var firstName = "Rishabh";
var lastName = "Shukla";
var fullName = firstName +" "+ lastName;
console.log(this);
console.log(firstName);
console.log(window);
console.log(myFunc); // as it is function aaegea 
console.log(myFunc());
console.log(fullName);
console.log(firstName); // undef

// note that we havent called the function myFunc() 

// 
// GEC = Glocal execution scope
