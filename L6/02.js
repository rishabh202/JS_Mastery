"use strict";
// document.createElement()    to add.

const newTodoItem = document.createElement("li");
// const newTodoItemText = document.createTextNode("Teach students");
newTodoItem.textContent = "Teach the learner";
const todoList = document.querySelector(".todo-list");
// todoList.append(newTodoItem);  // adds to last
todoList.prepend(newTodoItem);   // adds to first
console.log(newTodoItem)
//also like 


// we can also remove
const todo1 = document.querySelector(".todo-list li")
todo1.remove();
console.log