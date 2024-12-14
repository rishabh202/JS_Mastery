"use strict";
// createElements: before, after
// see as we have seen before, append li ke andar add krtay and preprend li ki bahar
// but if we want ki li k phele ya fir baad me insert ho, toh woh hoga, before and after se


// before 
const newTodoItem = document.createElement("li");
newTodoItem.textContent = "teacher"
const todoList = document.querySelector(".todo-list")
todoList.before(newTodoItem); 

// style nai aai qki obv style humne li ko dia hai, li k phele ko nai


//after 
const newTodoItem1 = document.createElement("li");
newTodoItem1.textContent = "student"
const todoList1 = document.querySelector(".todo-list")
todoList1.after(newTodoItem1)