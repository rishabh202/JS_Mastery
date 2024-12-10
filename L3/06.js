"use strict"
// Change the styles of elements using js

const mainHeading = document.querySelector("#main-heading");
console.log(mainHeading);


const mh = document.querySelector('div');
console.log(mh);
// it will give the first div

const mh1 = document.querySelector("div.headlines h2");
console.log(mh1);

///
console.log(mainHeading.style);
mainHeading.style.color = "pink";    // see change hogya, likewise we can edit properties or styles

// also note we cannot use - here. instead we can do like

mainHeading.style.backgroundColor = "yellow";
// mainHeading.style.background-Color = "yellow";  // error

// -x-
mainHeading.style.border = "2px solid black"