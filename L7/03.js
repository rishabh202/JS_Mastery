"use strict"
// Add events on multiple elements

const allBtns = document.querySelectorAll(".myButtons");
console.log(allBtns);
console.log(" ");
const allBtns1 = document.querySelectorAll(".myButtons button");
console.log(allBtns1);

for (let button of allBtns){
    button.addEventListener("click", function(){
        console.log("You have cliked me!!!");  /// ye eventlistener saare buttons(elements) pe lg chuka hai ab.
        // suppose we want to be more specific
        console.log(this);  // jese tune likha hai then this main div hi aaega
        console.log(this.textContent)  // jiss hisab se tune likha hai, uske according barabar hi aara hai

    })
}      

// and arrow case me toh window hi aaega
for(let btn of allBtns){
    btn.addEventListener("click", ()=>{
        console.log(this);
    })
}

// also normal for loop 
for(let i=0 ;i<allBtns.length; i++){
   allBtns[i].addEventListener("click", function(){
    console.log(this);
   })
}

// also forEach
allBtns1.forEach(function(button){
       button.addEventListener("click", function(){
        console.log("foreach")
        console.log(this);
       })
})


// not properly done