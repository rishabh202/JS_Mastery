"use strict";
// parameter destructuing 

// used mostly in objects, react 
const insaan = {
    firstName: 'Rishabh',
    gender: 'Male', 
}
function printDetails(obj){
    console.log(obj.firstName); 
    console.log(obj.gender); 
    console.log(obj.age); //  undefined, not error.
}
printDetails(insaan); 

function detailsBata({firstName, gender, interest}){
    console.log(firstName); 
    console.log(gender); 
    console.log(interest); // undefined
}
detailsBata(insaan);