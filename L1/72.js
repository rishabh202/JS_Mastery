"use strict";
// more about prototype
// see

let numbers = [1,2,3];
// numbers.
console.log(numbers);
// the numbers. gives some methods, where does this numbers come from?, these comes from the prototype

// but numbers aint a function, it is array here
// So internally js uses Array constructor to create array. Like
let numbr = new Array(1,2,3);
console.log(numbr); 
console.log(Array.prototype) // Array ka prototype, gives us the methods

// ye internally hota hai.
// we normally create like above.
// we can also see its prototype
console.log(Object.getPrototypeOf(numbers));
// prototype is a object, arrays in js are also stored like objects
console.log(Array.isArray(Array.prototype));  // true 
console.log(typeof numbers);


// See, prototype is mostly object, by js sets it accoriding to own, here js thought its better to be array, hence it is array, tho we can change it.

function abc(){
    console.log(abc.prototype);
}
abc();
abc.prototype = [];
abc();
