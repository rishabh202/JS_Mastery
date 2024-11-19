"use strict";
// for loop, break and continue keyword


for(let y=0; y<9; y++) {
    console.log(y); 
}    // note see video from 2:30:35 IMPP point is there (IMPPP AS PER INTERVIEW)
// here y exists only in the for loop, not outside
// console.log(y); // error

console.log("");

let r = 1;
for(; r<11; r++) {
    console.log(r); 
}
console.log("value of r is ",r); // here 11


let sum2 = 0;
// let num2 = 6; 
for(let j=0; j<7; j++){
    sum2 = sum2 + j; 
}
console.log(sum2); 

// above is for loop for sum of natural numbers


let sankhya1 = 100; 
let pura = (sankhya1*(sankhya1+1)/2); 
console.log(pura); 

// break keyword 
for(let a=1; a<11; a++){
    if(a===8){
        break;   // loop terminates
    }
    console.log(a); 
} 

console.log("");
// continue keyword 
for(let p=1; p<11; p++){
    if(p===4){     // 4 gets skipped
        continue;
    }
    console.log(p); 
}