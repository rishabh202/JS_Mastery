"use strict";
// Splice method

// start, delete, insert 

// array k beech mese agar koi delete ya insert krna hai toh uske lie splice method use hota hai 

const myArr = ['item1', 'item2', 'item3'];
console.log(myArr);


// delete
const deletedThing = myArr.splice(1, 1,) // khn se krna hai, kitna krna hai.
// splice also changes the original array.
// const deletedThing = myArr.splice(1, 2,)
console.log(myArr);
console.log(typeof deletedThing, deletedThing);
console.log(Array.isArray(deletedThing))

// Splice method also gives what deleted is as an array

// insert 
myArr.splice(2, 0, 'item 4'); // khn se start krna hai, delete kitna krna hai, insert kitna, kya krna h.
console.log(myArr);


// insert and delete both at a time

const newArr = [1,2,3];
const dItems = newArr.splice(0, 1, "rishabh", 1); // 0th index se ek item delete krna hai and do add krna hai
console.log(newArr); 
console.log(typeof dItems, dItems);


// thats it
