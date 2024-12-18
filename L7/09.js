"use strict"
// event bubbling / event propagation 
// event capturing 
// event delegation

console.log("hello ")
const grandparent = document.querySelector(".grandparent");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");

child.addEventListener("click", () => {
    console.log("You clicked on child!")
});
parent.addEventListener("click", () => {
    console.log("You clicked on parent!")
});
grandparent.addEventListener("click", () => {
    console.log("You clicked on grandparent!")
});


// now see child pe click krne se browser apne aap check kregga ki iske parent k pass bhi click event hai kya, agar hoga toh woh apne app usko call kr dega. ~ly for grandparent


document.body.addEventListener("click", () => {
    console.log("You clicked on body!")
});  

// if u click only on grandparent toh sirf grandparent aur uska parent dega(agr uske parent pe bhi event h toh hi!!!)

// this is callled as event bubbling or event propagation
