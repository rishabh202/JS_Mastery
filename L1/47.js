"use strict";
// find method 

const myArr = ['Hello', "bye", "dog", "cat"];
// find method also takes callback as an input, but return only the first thing which is true

function isLength3(string){
    return string.length === 3;
}

const ans = isLength3('wow'); // true
console.log(ans);
console.log(isLength3('and'));
console.log(isLength3('bye'));
console.log(isLength3('world'));


//
console.log("so we can use find method for this")
const uttar = myArr.find(isLength3);
console.log(typeof uttar, uttar);

const answer = myArr.find((string)=>string.length===3);
console.log(answer);

// realistic exmpale 

const users = [
    {userId: 1,firstName: "Rishabh", age: 19}, 
    {userId: 2,firstName: "Adam", age: 90}, 
    {userId: 3,firstName: "Lana", age: 14}, 
    {userId: 4,firstName: "Honey", age: 19}, 
]

// so since find method works for only one instance we use it for something which is unique for example in this case it is userId.

const id2 = users.find((user)=>user.userId===2);
console.log(typeof id2, id2); // object, 
