"use strict";

// how to iterate objects

const books = {
    genre: "nonfiction",
    pages: 200
}

// how to iterate object 
// 1 by for in loop
// obv will give only key, not key value pair for key value pair, below

for(let key in books){
    console.table(key); 
}   // obv will give only key, not key value pair for key value pair, below

for(let key in books){
    console.table(books[key]); 
}   
console.table(books);   
// to get both key and key value pair
for(let key in books){
    console.table(`${key} : ${books[key]}`); 
}
// u can also do the other way if want 
for(let key in books){
    console.table(key,": ", books[key]); 
}

console.table(Object.keys(books)); // books wale object me jo keys h uska array banake dega
console.log(typeof Object.keys(books)); // object (array bn jaatay)
console.log(Array.isArray(Object.keys(books))); // true

// for of

for(let key of Object.keys(books)){
    console.table(key); 
}
for(let key of Object.keys(books)){
    console.table(books[key]); 
}

for(let key of books){
    console.log(books[key]);
}   // error


