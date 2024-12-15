"use strict";

// static list vs live list

const listItems = document.querySelectorAll(".todolist li");
const sixthLi = document.createElement("li");
sixthLi.textContent = "item 6"
const ul = document.querySelector('.todo-list');
ul.append(sixthLi);
console.log(listItems);


// querySelectorAll gives us static list 
// getElementsBySomething gives us live list

// skipped this also from 5:58:11
 