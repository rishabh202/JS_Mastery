"use strict";
// document.createElement()    to add.

const newTodoItem  = document.createElement("li");
const newTodoItemText = document.createTextNode("Teach anyone")
 console.log(newTodoItem);  // the li element has been created
// now we want to add newTodoItemText to newTodoItem
// so 
newTodoItem.appendChild(newTodoItemText);
// now we want it to be on webpage
const todoList = document.querySelector(".todo-list");
// todoList.append(newTodoItemText); // nnow it will show on ui also, bt isses hamari css nai aaega
newTodoItem.append(newTodoItemText);
todoList.append(newTodoItem);