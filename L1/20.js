"use strict";
// arrays and push, pop, unshift, shift

// arrays: ordered collection of items 
let fruits = ["Apple", "Mango", "Pineapple", "Watermelon"];
console.log(fruits); 
console.log(fruits[1]); 
// you can store any type of datatypes in arrays 
let mixed = [1, 369, 'Tesla','', 21, 'Philosophy', 'Sports', 2.369]; 
console.log(mixed); 
fruits[1] = "Grapes";  // This will change the actual array 
console.log(fruits);   // Arrays is a reference type. All reference types are called objects. so arrays is a object 
console.log(typeof mixed); 
console.log(Array.isArray(fruits));   // to check whether array or not

let something = {};   // object literal
console.log(typeof something); 
console.log(Array.isArray(something));  // false

// push: used to add something in array in last (this will also CHANGE the original array) i.e arrays are not immutable
console.table(fruits); 
fruits.push("Banana");
console.table(fruits); 
console.table("hello"); 
// pop will remove from last 
console.table(mixed); 
mixed.pop();
console.table(mixed);   //This also will change array But pop will also give us the removed item see
let poppedItems = mixed.pop();
console.table('popped items are ',poppedItems);
// to add from start
fruits.unshift('Dragonfruit', 'HybridFruit'); 
console.table(fruits); 
// to remove froms start
let removedItems = mixed.shift(); 
console.table(mixed); // This will also give
console.table('Removed item from mixed from start is ', removedItems); 
//NOTE: Push and Pop are fast then unshift and shift

// push --> to add something to last (changes original array)
// pop --> removes from last and gives the removed. And also changes original array 
// unshift --> adds to start. and obv chnages original arrray
// shift --> removes from start and gives and also changes 
