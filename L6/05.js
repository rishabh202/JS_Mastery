"use strict";
// createElements()   remove.

// now the index.html as it is linked to 05.js has only one todo (todo1)
// so suppose we need to remove that

const todo1 = document.querySelector(".todo-list li")
todo1.remove();  // it is now removed from the page
console.log(todo1)  // no need btw.