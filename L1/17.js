"use strict";


// While loop (dry- don't repeat yourself)
let i = 1; 
while(i<=9){
    console.log(i); 
    i++; 
}
console.log(`current value of i is ${i}`); // 10. as 9tk hogya.
console.log('This was while loop, nice and easy'); 

// eg: sum of first 10 natural numbers
let num = 10;
let sum = 0; 
let k = 0; 
while(k<=10){
    sum = sum + k;
    k++; 
}
console.log(sum); 

// another method to do this with the help of maths 
let sankhya = 10; 
let total = (sankhya*(sankhya+1)/2); 
console.log(total); 