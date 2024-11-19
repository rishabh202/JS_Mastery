"use strict";
// template string, Null, undefined, typeof, BigInt

let fullName = "Rishabh Shukla"
let age = 19;

// let aboutMe = 'My name is ' + fullName + ' and my age is ' + age;  
// console.log(aboutMe);     
// toh hm aisa kr skte hai, but yeh kafi tedious kaam h hence, will use template stringm yhn pe backticks use honge
let aboutMe = `My name is ${fullName} and my age is ${age}`;
console.log(aboutMe);  

var nayaNaam; 
console.log(typeof nayaNaam); // undefined obv

const calmness = Infinity;  // constant ko defined krna hi pdega, we cant leave it undefined unlike var or let 

console.log(typeof calmness); // number. Js treats infinity as number.

nayaNaam = 'Harshit'; 
console.log(typeof nayaNaam, nayaNaam); 

//

let nayaVariable = null; 
console.log(typeof nayaVariable, nayaVariable);  // bug / error. type of null = null hona chiaye but object deta hai


nayaVariable = 'I am naya var'; 
console.log(typeof nayaVariable, nayaVariable); 

// 

// Big int

console.log(Number.MAX_SAFE_INTEGER);
let anumber = 654635;   // any number in js has limit, and that limit, u can check by MAX_SAFE_INTEGER
console.log(anumber); 

// BigInt is beyond that limit
let anotherNumber = BigInt(357465354565643435464532); 
console.log(anotherNumber); 
// another way to make BigInt , BigInt is a new primitve datatype in js
// And obv we can also store small numbers as BigInt.

let sankhya1 = 34n; 
console.log(sankhya1, anotherNumber + sankhya1);   // u cant add BigInt and normal number, but obv can add BigInt and BigInt
// let something = 369;
// console.log(something + sankhya1);  // this throws error obv