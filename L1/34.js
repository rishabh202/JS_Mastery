"use strict";
// Functions 

function singHBD(){
    console.log("Happy birthday to you....huihuihui"); 
}
singHBD(); 

function twoPlus4(){
    console.log(2+4); 
}
twoPlus4(); 
singHBD(); 
// Rmbr DRY (dont repeat yourself)
// we can also do like
function tenPlus1(){
    return 10+1; 
}

const returnedValue = tenPlus1(); // yhn pe humne fx ko call hi kiya obv
console.log(returnedValue); 

function sum2Numbers(number1, number2){
      return number1 + number2; 
}
const functionSum = sum2Numbers(99, 1); 
console.log(functionSum); 

function sum3numbers(number1, number2, number3){
     return number1 + number2 + number3; 
}
const function3sum = sum3numbers(1,2,3);
console.log(function3sum); // 6
const function3Sum = sum3numbers(2,3);
console.log(function3Sum);  // note since 2 + 3 + NaN = NaN 

function isEven(number){
    if(number%2===0){
      return true
    } return false
}
console.log(isEven(23)); 

function iseven(number){
    return number%2===0; 
}
console.log(isEven(56)); // will return boolean character| in this case true

//

const firstCharacter = anyString => anyString[0]; // this is arrow function, anyString is the parameter
console.log(firstCharacter('ksfd')); // k


function findTarget(array, target){
    for(let i=0; i<array.length; i++){ 
        if(array[i]===target){
            return i; 
        } 
    } return -1; 
}
const arrayk = [1, 45, 69, 369]; 
const ans = findTarget(arrayk, 369);
console.log(ans);  // 3
//This was function declaration, now we'll do function expression 

const singHBDY = function(){
    console.log("Happy brithday bruhh"); 
}
singHBDY();

const kyaEven = function(numbrr){
      if(numbrr%2===0){
          console.log("This number is even"); } 
      else
      console.log("This number is odd")
}
kyaEven(108); //bs aise hi function declaration ko function expression me badal skte h