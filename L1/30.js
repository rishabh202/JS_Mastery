"use strict";
// spread operator 

const arrayA = [1, 2, 3]; 
const arrayB = [3, 6, 9]; 
const new_Array = [...arrayB]; 
const new$Array = [...arrayB, ...arrayA, 108]; // Imp point to note is that ki 3 ko alg alg treat kia, i.e dono count consider kiye.
const newwArray = [...arrayB, arrayA]; // ab yhn pe arrayA spread nhi hoga, pura as a whole aajagea, 1 element ki tarah
console.table(new_Array);  
console.table(new$Array);   
console.table(newwArray);   // 4 elements obv

console.log(" ");

let anotherarray = ["abc"];
console.log(anotherarray); 
console.table(...'abc');   // yes u can also spread string. also note that numbers arent iterable
let array10 = [..."47272454524"];
console.log(array10);  
// let array110 = [...47272454524];
// console.table(array110);    // will throw error bcz numbers are not iterable.

// now spread operator in objects
const obj1 = {
    key1: 'value1', // overidden for obj5
    key2: 'value2'
}
const obj2 = {
    key11: 'value3', 
    key22: 'value4',
    key1: "overidden value"
}

const obj3 = {...obj1};
console.table(obj3); 
const obj4 = {...obj1, ...obj2, key96: "value69"};
console.table(obj4); 
const obj5 = {...obj2, ...obj1};
console.table(obj5);

const object_ = {..."abcd"}; 
console.table(object_)  // index will beoome key obv 
console.log(typeof object_); // object
console.log(Array.isArray(object_))   // false 

const object$_ ={...["abcd", "dfgaf"]}; 
console.table(object$_)   // obv only 2 key value pair

const alphabets = {..."abcdefghijklmnopqrstuvwxyz"}; 
console.table(alphabets); 
console.log(alphabets[17]);
// problem solving me kbhi kbhi ye use ho jata hai ki alphabets ki value chiaye etc etc 


let biggy = alphabets.toUpperCase(); 
console.table(biggy);   // check about this lolzz
// toUpperCase() works for string, however alphabets is not string.
