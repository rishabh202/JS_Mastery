"use strict";
// innerHTML

// kisi bhi component k andar ka cheez innerHTML hai
const headLine = document.querySelector(".headlines");
console.log(headLine);
console.log(headLine.innerHTML);

// see even comments are shown in innerHTML


headLine.innerHTML = "<h2> InnerHTML changed</h2>"
headLine.innerHTML += "<button class=\"btn\"> clickme </button>"

// "" and andar "" aise use krte hai \" \"
// i.e \" ----> "
headLine.innerHTML += "<button> extraBtn </button>"
// headLine.innerHTML -= "<button> extraBtn </button>"
