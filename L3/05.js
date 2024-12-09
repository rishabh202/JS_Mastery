"use strict";
// change/editing element
// innerText

const mh = document.getElementById("main-heading");
console.log(mh);
console.log(mh.textContent);
// so as u can see textContent gives the property which maybe hidden also. 
// Basically it gives entire element, even if its hidden.

// while innerText gives only the unhidden text/element
console.log(mh.innerText);