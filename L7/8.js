"use strict"
// keypress event 
// mousepress event


// key press events are used to so that we can know when an element is pressed or clicked, and WHICH element is pressed, pure body me

// using L3 wala index.html for this

const body = document.body;

body.addEventListener("keypress", (e)=>{
    console.log(e);
    console.log(e.key);
})

const mainButton = document.querySelector(".btn-headlines")
console.log(mainButton);
mainButton.addEventListener("mouseover", ()=>{
    console.log("mouseover event occured");
})
mainButton.addEventListener("mouseleave", ()=>{
    console.log("mouseleave event occured");
})