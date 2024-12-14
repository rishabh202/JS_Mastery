"use strict";
// document.createElement()    to add.

// we can also do in shorter way like
const newTodoItem = document.createElement("li");
newTodoItem.textContent = "Teach Students"
const todoList = document.querySelector(".todo-list")
todoList.append(newTodoItem);
console.log(newTodoItem)

// aese bhi krste hai