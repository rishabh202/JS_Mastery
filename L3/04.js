"use strict";
// change/editing element
// textContent & innerText

const mainHeading = document.getElementById("main-heading");
console.log(mainHeading)
console.log(mainHeading.textContent);
mainHeading.textContent = "This is new heading";
console.log(mainHeading.textContent);

// so by using textContent property u can change texts
