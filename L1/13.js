"use strict";
// and (&&) and or (||) operator 

let nayaNaam = "Harsh";
let umar = 19;

if (nayaNaam[0] === 'H') {
    console.log('Your name starts with H');
} 
if (umar<18){
    console.log('Your age is less than 18'); 
}  else {
    console.log('inside else'); }

if (nayaNaam[0]==='H' && umar<18){  
    console.log("Your name starts with H and your age is below 18");   // note obv dono conditions T hongi tbhi overall conditon T hogi
} else {
    console.log('inside else'); 
}      
if (nayaNaam[0]==='H' || umar<18){  
    console.log("Your name starts with H or your age is below 18");  // note isme obv ek bhi condition T hogi then overall conditon bhi T hogi (i.e TT=T, TF=T, FT= T, but FF=F)
} else {
    console.log('inside else'); 
}   