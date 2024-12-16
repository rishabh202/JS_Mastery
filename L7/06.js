"use strict"
// practice with click events


// see simple practice, we want if we click on any button, its bgColor then must be yellow and text color gray
const allBtns = document.querySelectorAll(".myButtons button");
console.log(allBtns.length);

allBtns.forEach(button => {
    button.addEventListener("click", (e)=>{
        // console.log(e.target);
        e.target.style.backgroundColor = "yellow";
        e.target.style.color = "#333";
    })
})