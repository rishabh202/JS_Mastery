"use strict";
// document.createElement()    to add.
// prepend

// vsimple, append adds to last and prepend adds to first

const newTodoItem = document.createElement("li");
newTodoItem.textContent = "Teach Students"
const todoList = document.querySelector(".todo-list")
todoList.prepend(newTodoItem);
console.log(newTodoItem)