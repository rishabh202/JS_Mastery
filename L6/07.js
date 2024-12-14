"use strict";
// Insert adjacent elements

// elem.insertAdjacentHTML(wherem, html)
// beforebegin
// Afterbegin
// beforeend
// afterend

const todoList = document.querySelector(".todo-list");
todoList.insertAdjacentHTML("beforeend", "<li> teaching </li>")
todoList.insertAdjacentHTML("Afterbegin", "<li> teachinggg </li>")
todoList.insertAdjacentHTML("beforebegin", "<li> taught </li>")
todoList.insertAdjacentHTML("Afterend", "<li> taar  </li>")


// so see aese bhi kr skte hai , but most of the developer use that createElement and append, prepend method. That is a better practise.

