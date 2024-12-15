"use strict"; 
// introduction to events

// exmaples of events are click, button press, hover
// https://developer.mozilla.org/en-US/docs/Web/Events  documentation
// https://developer.mozilla.org/en-US/docs/Web/API/Element#mouse_events  see there are many events. 


// there are three ways to add events
// 1st is to directly add in html | Rarely used


// 
const btn = document.querySelector(".btn")
console.dir(btn);
btn.onclick = function() {
console.log("u done clickkr");
}
// this was the second way, this is also not a good practice

// here mera button select hi nai hora idk why | idiot defer nai likha tha islie


// Third way 
// see we have a method --> addEventListener 


const btn2 = document.querySelector(".btn2")
console.log(btn2)
function clickKro (){
    console.log("clickKro is clicked")
}
btn2.addEventListener("click", clickKro); // this "click" here is default
// we can also directly define function in parameter 

btn2.addEventListener("click", function(){
    console.log("another time clickKro");
})

// arrow function bhi kr skte hai 

btn2.addEventListener("click", () =>{
    console.log("another time clickKro with arrow func");
})