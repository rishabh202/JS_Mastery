// String methods: uppercase, lowercase and slice
"use strict";

let friend = 'abcd';
console.log(friend.toUpperCase());   // yeh nayi string diya h hence friend abhi bhi abcd hi hai. Because strings are immutable.
console.log(friend);    // yeh small hi aaega obv (IMP understand that be clear simple h ekdum)
 
let enemy = 'PQRS'; 
console.log(enemy);
enemy = enemy.toLowerCase();    // yhn pe hmne old string ko nayi string me change kr diya, unlike previous one
console.log(enemy); 

console.log(" ");

let word = 'aforAgRa'; 
console.log(word.toLocaleLowerCase()); // obv this is new string
console.log(word); // the old string; as it is.
word = word.toLowerCase();
console.log(word);    // simple ekdum. We changed it

console.log(" ");

// slice method

let bandi = 'Tanisha'; 
console.log(bandi.length);
console.log(bandi);
// slice method start from 0th index to last-1 index. i.e if u want 0-5 put 0-6 or for 1-5 put 1-6 
let newBandi = bandi.slice(3,7);  // isha
console.log(newBandi);     // OP xdd

// 
console.log(" ");
let firstName = "Rishabh";


let first_Name = firstName.slice(0,5);  //risha 0 se 4th index tk
console.log(first_Name.length);  // 5
console.log(first_Name);  // new variable lia h humne obv.
let first$Name = firstName.slice(1); // it will go from 1th index to last
console.log(first$Name); 

console.log(" ");

