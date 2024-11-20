"use strict";
// using const for creating arrays

const pi = 3.14; // obv you cant change value of const
// pi = 369;   // will throw error
console.log(pi); 

const drinks = ["Apple juice", "banana juice", 'grapes juice']; 
drinks.push("watermelon"); 
console.table(drinks);   // see isme change hogya understand the reason why, see vdo if want

// drinks = ["yellow", 'blue', 'red']; // this will throw error. bcz it is const
//it is better to use const for marking arrays 

// const se bane hue array me push ya pop krke hum actual const ko nai change krre hai, islie it happend

// Hence we generally use const for referene data types

