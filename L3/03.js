"use strict";
// querySelector
// select elements using querySelector

// see getElementById works only for those events which have id. 
// on the other hand, query selector works with everyone.

console.log(document.querySelector(".header"));
console.log(document.querySelector("#main-heading"));

const headerrr = document.querySelector(".header");
console.log(headerrr);


// classes can be same, but heading must be different for all elements
const lists = document.querySelector(".lists");
console.log(lists) // see woh ek hi element dega, first wala

// we can also get all by using all
const lists1 = document.querySelectorAll(".lists");
console.log(lists1)

// we get a nodeList, it is like an array but not array