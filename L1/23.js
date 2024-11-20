"use strict"
// for loop in array

// loops in arrays
let newArray = ['fsadsd', 'yo','36', '81', 'lonewolf', '23', 'afhada']; 
console.table(newArray); 

for(let i = 0; i < newArray.length; i++){
    console.table(newArray[i]); 
}  // will print all elements of array
for(let i = 0; i < newArray.length; i++){
    console.table(newArray[i].toUpperCase()); 
}

let arrayUpper = []; 
for (let i = 0; i < newArray.length; i++){
    arrayUpper.push(newArray[i].toUpperCase()); 
}
console.table(arrayUpper);
console.log(newArray===arrayUpper); // false
