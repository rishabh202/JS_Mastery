"use strict"
// event capturing  (IMP) see lec
// event delegation

console.log("hello ")
const grandparent = document.querySelector(".grandparent");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");

child.addEventListener("click", () => {
    console.log("capture !!! child!")
},true);
parent.addEventListener("click", () => {
    console.log("capture !!! parent!")
},true);
grandparent.addEventListener("click", () => {
    console.log("capture !!! grandparent!")
},true);
document.body.addEventListener("click", () => {
    console.log("capture !!! body!")
},true);  

// see there are two types of events, ek jisko hum capture krre hai nd dusra nai krre hai. Aur Capture krre hai true likhke. i.e passing true as a third argument to addEventListener
// below are the events which we dont capture, i.e uska false argument hai
// so anticlockwise direction me events chlre hai.
// sbse phele last most thing which is captured to the last thing which is not captured i.e phele capturing hoga then bubbling hogi


child.addEventListener("click", () => {
    console.log("Bubbling starts | You clicked on child!")
});
parent.addEventListener("click", () => {
    console.log("You clicked on parent!")
});
grandparent.addEventListener("click", () => {
    console.log("You clicked on grandparent!")
});
document.body.addEventListener("click", () => {
    console.log("You clicked on body!")
});

// jo events humme bana rkhe hai, whi hoga.
// okay but whats the use?


