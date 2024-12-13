"use strict";
// add new elements to page using js

// innerHTML to add html elements

/*
const todoList = document.querySelector(".todo-list");
console.log(todoList.innerHTML);
todoList.innerHTML = "<li>new todo</li>"
console.log(todoList.innerHTML);
*/

// seelike this, innerHTML changes the original thing, we dont want that. we want to add new

// but we can also do like 

const todoList = document.querySelector(".todo-list");
todoList.innerHTML = todoList.innerHTML + "<li>new todo</li>";
// todoList.innerHTML += "<li>new todo</li>";  // aese bhi likh skte hai
console.log(todoList.innerHTML);

// see hogya, but we should never do it with innerHTML, qki performance issue hotay, browser needs to then render all again for new elements.
// u can use it when u only want to edit and not do any changes

