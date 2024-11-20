"use strict";
// while, for of, for in loops in array

const drinks = ['apple juice', 'mango juice', 'watermelon juice'];

let j = 0; 
while (j < drinks.length){
         console.table(drinks[j].toUpperCase()); 
         j++;
}
let drinks_ = []; 
let w = 0
while (w < drinks.length){
    drinks_.push(drinks[w].toUpperCase());
    w++;
}
console.table(drinks_); 
console.log(drinks===drinks_);   // false

for(let drink of drinks){
    console.table(drink); // tbtk chlega jbtk sb ho na jaae
} 
for(let drink of drinks){
    console.table(drink.toUpperCase()); 
} 
let $drink = []; 
for(let drink of drinks){
    $drink.push(console.table(drink));
}
console.log($drink===drinks);  // false
// this was for of loop, now for in loop (used for giving index )
// NOTE THAT: for in loop is used to get index (of arrays obv)
for(let drinkNumber in drinks){
    console.table(drinkNumber); 
}
for(let drinkNumber in drinks){
    console.table(drinks[drinkNumber]); // we printed array element of drinks using the variable with the help of for in loop.
}
const drinkLast = []; 
for(let drinkNumber in drinks){
    drinkLast.push(drinks[drinkNumber]); 
}
console.table(drinkLast);
console.log(drinks===drinkLast)  //false
// mostly with array we use for of loop or normal for loop. Do revise and Practice much