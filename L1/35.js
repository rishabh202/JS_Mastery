"use strict"
// Arrow functions and hoisting and functions inside functions

// Arrow Functions 
const intro = () => {
    console.log('my name is Rishabh Shukla'); 
  }
  intro(); 
 
  const KYAeven = (numbr) => {
    return numbr % 2===0; 
  }
 console.log(KYAeven(21)); 
 // also like this 
 const ifEven = nomber => nomber%2===0; 
 console.log(ifEven(4)); 
 
 // hoisting 
 hello(); 
 function hello(){
     console.log("Hello"); 
 }
 // note in JS we can call the function before declaring, but only in case of function declaration. not in function expression or arrow function 
 const Hello = function(Hello){
     console.log("Heello"); 
 }
 Hello();  // we cant call this b4 since this is function expression 
 
 //  function inside function
 
 const app = () =>{
     console.log("You are inside app");
     const myFunc = () => {
         console.log("Hello from myFunc"); 
     }
     const sumtwo = (numm1, numm2) =>{
         return(numm1 + numm2); 
     } 
     const mul2 = (numm1, numm2) => (numm1*numm2); 
     myFunc(); 
     console.log(sumtwo(3,6)); 
     console.log(mul2(3,6)); 
 }
 app(); 
 