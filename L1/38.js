"use strict";
// Default parameters and Rest parameteres

// Default parameters
function sum2num(a,b){
         return a+b;
}

console.log(sum2num(5)); // we must be getting 5 by obv NaN aaega, isko solve krne k lie we use default parameters

function add_Do(a, b){
    if(b===undefined){
        b = 0; 
    }
    return a+b; 
}
const uttar = add_Do(2); 
console.log(uttar); // this is the old method, now new 

function do_Add(x, y=0){
    return x+y; 
}
const Uttar = do_Add(6);  // idfhr y=0 hojaega (default value) | default parametee use kia h islie.
console.log(Uttar); // obv you can set to 0,1 ...or etc anything you want
const dusraUttar = do_Add(6,4); // yhn pe qki humne y ki value di hai, default nai hoga kx
console.log(dusraUttar);
const thirdAns = do_Add(1);
console.log(thirdAns);


console.log("");
// Rest parameter

function Mera_func(a,b,c){
    console.log(`value of a is ${a}`); 
    console.log(`value of b is ${b}`); 
    console.log(`value of c is ${c}`); 
}
Mera_func(3,6,9); 

// VERYIMP SEEE FROM 5:57:26
function Mera_func(a,b,...c){
    console.log(`value of a is ${a}`); 
    console.log(`value of b is ${b}`); 
    console.log(`value of c is ${c}`);   // baki k sb c me aaenge, qki c pe apun ne rest parameter lagaya hai.
    console.log(typeof c);  // as a array hi liya hai.
    console.log(Array.isArray(c));
}
Mera_func(3,6,9,1,0,8,2); 
// console.log(typeof c); // undefined

function addAll(...numbers){
    console.table(numbers); 
    console.log(typeof numbers);  // As a array le leta hai sb
    console.log(Array.isArray(numbers));  
}
addAll(4,5,4,6,5,8,1,3,546,74);   
addAll('dfa', 45, 8, 'daqaq', 89, 'ffkk'); // 6 elements 0-5

console.log("");

function sumAll(...numbers){
    let total = 0; 
    for(let number of numbers){
        total = total + number; 
    }
    console.log(typeof total) // number
    console.log(typeof numbers)  // object (array)
    return total; 
}  // simple function for sum

const answr = sumAll(1,2,3,4,5)
console.log(answr); 
console.log(typeof total) // undef
console.log(typeof numbers)  // undef

const letsSee = sumAll(1,2,3, "op"); 
console.log(letsSee); // LOL