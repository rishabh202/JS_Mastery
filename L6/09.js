"use strict";
//  some old methods to support poor internet explorer 
// appendChild;
// insertBefore
// replaceChild
// removeChild


const ul = document.querySelector(".todo-list");
const li = document.createElement("li");
const referenceNode = document.querySelector(".first-todo")
li.textContent = "nnew todo";
// ul.appendChild(li);
ul.insertBefore(li, referenceNode);


// skippped this as of now from 05:49:58 