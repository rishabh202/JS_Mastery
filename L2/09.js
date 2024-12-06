"use strict";
// Function execution context.
// Till now we studied global execution context, now we will be studying function execution context 

let foo = "foo";
console.log(foo);
function getFullName(firstName, lastName){
    console.log(arguments);
    console.log(arguments.length);
    console.log(arguments[0]); // array like objects me store hotay
    let myVar = "var inside function";
    console.log(myVar);
    const fullName = firstName +""+lastName;
    return fullName;
}

const personName = getFullName("rishabh"," shukla");
console.log(personName);  

// in js whenever we call any function, then a separate execution context is made for that; and that is called function execution context