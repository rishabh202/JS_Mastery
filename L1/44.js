"use strict";
// Important array methods
// filter method


// filter ka callback function humesha boolean value return krna chaiye 

const numbers = [1,2,3,4,5];

const isEven = function(num){
    return num%2===0;
}

let evenNms = numbers.filter(isEven);
// filter functions phele toh callback me ek aisa function leta hai, jo boolean value return kre, aur phir woh sirf true values ko array me store krta hai
console.log(evenNms);

let oddNums = numbers.filter((a)=>{if(a%2!==0)return a});
console.log(oddNums);
let oddNumsOther = numbers.filter((a)=>{return a%2!==0});
console.log(typeof oddNumsOther, oddNumsOther);
console.log(typeof evenNms);
console.log(Array.isArray(evenNms));

