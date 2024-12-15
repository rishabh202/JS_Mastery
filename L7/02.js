"use strict"
// This keyword inside eventListener callback

const btn = document.querySelector(".btn")

btn.addEventListener("click",function(){
    console.log("you clicked me!!!");
    console.log("Below is value of this");
    console.log(this)
})

// even if function is outside, still same kaam hoga.
const btnn = document.querySelector(".btn2")
function clickMe (){
    console.log("you clicked me again")
    console.log("Below is value of this");
    console.log(this)
}
btnn.addEventListener("click",clickMe)

// But in case of arrow functions, the value of this becomes a window object

const btBtn = document.querySelector(".btn3")
btBtn.addEventListener("click", ()=>{
    console.log("you clicked me with arrow func")
    console.log("Below is value of this");
    console.log(this)
})