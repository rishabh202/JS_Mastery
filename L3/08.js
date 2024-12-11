"use strict";
//querySelectorAll & getElementsbyClassName

// get multiple elements using getElements by class name
// get multiple elements items using querySelectorAll

const lists = document.getElementsByClassName("lists")
console.log(lists);
// what we get is a array like object. i.e ki we can do indexing. 
// But in array like objects we do not get all array methods. We can do indexing only
console.log(lists[3]);  // undef
console.log(lists[2]);
console.log(typeof lists); // object
console.log(Array.isArray(lists))  // false


// get elements by classname gives us an html collection

// we can also use querySelectorAll
// querySelector all gives a NodeList

const lists1 = document.querySelectorAll(".form-group")
console.log(lists1);
console.log(lists1[2]);
console.log(lists1[5]);
console.log(lists1[6]);
const lists2 = document.querySelectorAll("#listss")
console.log(lists2);
console.log(lists2[0]);
console.log(lists2[2]);

