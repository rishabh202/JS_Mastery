"use strict";
// let and const hoisting

// console.log(firstName); // it is an uncaught reference error | simply means variable toh bn gya hai, bt we cant access it before initialization.
// let firstName = "Rishabh";
const firstName = "Rishabh";  // const ke case me bhi same hi aaega.
console.log(firstName);

// see execution se phele hi, woh sab JS k pass hai, due to compilation.

// ---

// console.log(lastName); // error, lastName is "not defined".

// hence we can say that let and const are also hoisted.

// till before the variable is initialized, its stays in the TDZ (temporal-dead-zone)

// console.log(Aname);
let Aname = "somename";
console.log(Aname);

// console.log(aWord);  // uncaght refere error cannt acces before init
let aWord;
console.log(aWord);  // undef

// const bWrod;   // error bcz const declarations must be initialized
// console.log(bWrod); // error

// ---- 
console.log(typeof somerName);  // typeof k wjh se hua aisa 
// let somerName = "parraot";
// console.log(somerName);

