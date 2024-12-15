"use strict";
//  How to get the dimensions of an element
// suppose we want height and width of an element, so how we will do that?
const sectionTodo = document.querySelector(".todo-section")
const info = sectionTodo.getBoundingClientRect();
const info1 = sectionTodo.getBoundingClientRect().height;
const info2 = sectionTodo.getBoundingClientRect().top;
console.log(info);
console.log(info1);
console.log(info2);


// ~ly etc
