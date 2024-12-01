"use strict";

// compilation
// code execuion

// why compilation?

// How JS codes execute

// what is global execution context and local execution context

// closures

// -x-
// Compiles first, execution is different, compilation comes first in js.

// compilation ke time its check if for any errors, agar h toh nai hoga execuite, else hojaaega 
console.log(window);
console.log(window);
console.log(this);
console.log(firstName);
// console.log(, firstName);
var firstName = "Rishabh";
console.log(window.firstName);

// in js complies first, so as to check, which variales is declarted where and is scope is till where. Then it executes