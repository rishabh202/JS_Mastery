"use strict";
// primitive vs reference datatypes 

// Prmitive vs reference datatypes 
let num1 = 5; 
let num3 = num1; 
console.table('The value of num1 is', num1);
console.table('The value of num3 is', num3);
num1++; 
console.log('After incrementing num1'); 
console.table('The value of num1 is', num1);
console.table('The value of num3 is', num3);  // 5 hi rhega, as primitve types are immutable. They cannot be altered.
// this is pirmitive datatyes
console.log(num1===num3); //false

// reference datatypes (till now we studied one reference DT i.e array)
let fruits = ['apples', 'orange', 'watermelons', 'banana'];
console.table(fruits); 
let array = fruits; 
console.table(array); 
console.table(fruits); 

fruits.push("another fruit"); 
console.table(array); 
console.table(fruits);   // understand this very properly, that why this happened and what is the diff btwn, primitive and reference dataype, ckc vdo if want to 
// to check whether they are equal or not u can also do like
console.log(array===fruits); 
// referenec datatypes change!!! i.e they are mutable