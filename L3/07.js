"use strict";
// get and set attributes

const link = document.querySelector("a") // it will search for the first anchor tag
console.log(typeof link, link);


// what are attributes? 
// In JavaScript (JS), attributes typically refer to the properties associated with HTML elements in the DOM (Document Object Model)
// like for eg in previous
// class id href placeholder action etc are attributes

// get attribute is a method
console.log(link.getAttribute("href"))
console.log(link.getAttribute("href").slice(1)); // to not get the #

//
const inputElement = document.querySelector(".todo-form input")
console.log(inputElement);
console.log(inputElement.getAttribute("type"));


// like this we can set attribute and we can also change 
link.setAttribute("href", "https://google.com")
console.log(link.getAttribute("href"));