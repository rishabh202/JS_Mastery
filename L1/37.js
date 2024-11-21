"use strict";
// Block scope vs Function scope

// block scope vs function scope 
// let and const are block scope i.e tune agar kisi block me let ya const declare kiya h toh, tu who let and cosnt ko ussi block me access kr skta h 
// var is function scope   

{
    const phelaNaam = "Rishabh";
} 

{
    var name1st = 'Tesla'; 
}
console.log(name1st); 
// also same variables (let and const) are diff in diff block. and file (global environment ka tho alag hai hi)
{
    const some_thing = 21; 
    console.log(some_thing); 
}
{
    const some_thing = 108; 
    console.log(some_thing); 
}
const some_thing = 11; 
console.log(some_thing); 

if(true){
    let phelaName = "yamla";   
    console.log(phelaName); 
}
console.log(phelaName);  // undefined, var use kiye hote toh undefined nai hota

if(true){
    var phelaName = "yamla"; 
    console.log(phelaName); 
}
console.log(phelaName); 

console.log(" ");

{
    var namee = "Rishabh";
    console.log(namee);
 }

 {
    var namee = "Mohit";  // if we comment this, then idhr bhi Rishabh print hoga.
    console.log(namee);
 }

 console.log(namee); // Mohit
 console.log("");


 
 function myApp(){
     if(true){
         let pheleNaam = "Adam";
         console.log(pheleNaam);
        }
        // console.log(pheleNaam); // error since let se bana hai,  and iske lexical scope me phelenaam ka kn hai, na hi global me. 
    }
    
myApp();

function myApp2(){
    if(true){
        var pheleName = "Adam";
        console.log(pheleName);
    }
    console.log(pheleName);  // now here that phelename is accessbile in the lexical env of this hence print ho jaaega.
}

myApp2();

// That is why let and const are called block scope, whereas var is called function scope
