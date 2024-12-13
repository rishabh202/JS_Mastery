"use strict";
// classList

const todoSection = document.querySelector(".todo-section")
console.log(todoSection);
console.log(todoSection.classList);

// we can also make classes from js
todoSection.classList.add("bgDark");
console.log(todoSection.classList);

// similarly we can remove also 
todoSection.classList.remove("container");

//if we want to check if any element has a particular class or not
const ans = todoSection.classList.contains("bgDark");
console.log(ans); 

// toggle: what it does ki agr koi class phele se hai, toh usko remove kr dega and vice-versa. i.e nai h toh add kr dega

todoSection.classList.toggle("bgDark"); // remove kr dega
todoSection.classList.toggle("bgDark"); // add kr dega
todoSection.classList.toggle("bgDark"); // remove kr dega

todoSection.classList.toggle('container');

//
console.log(" ");

const header = document.querySelector(".header");
console.log(header.classList);
console.log(header.classList.add('bgDark'));
console.log(header.classList);
// console.log(header.classList.toggle("bgDark"));
// console.log(header.classList);

// see isme effect islie nai hora, qki alredy humne header ko css de rkhi hai, toh woh override hora hai