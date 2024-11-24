"use strict";
// prototypes

// see in js functions are not just functions, they are functions + objects
// i.e woh functions toh hai hi, aur objects bhi hai

function functionKaNaam(){
    return true;
}

console.log(functionKaNaam.name);
// so this is like objects, name is a property.

// so u can also add yr key-value pair.
functionKaNaam.meraKey = "meraValue";
console.log(functionKaNaam.meraKey);

// name property --> tells functions name

// function provides more useful properties

// function gives us an object("free-space"), and uss object ko bolte hai prototype

functionKaNaam.prototype;  // {} 
// This is empty object, which js provide if we want to add any key-value pair to a function

console.log(functionKaNaam.prototype);

// "Only functions provide prototypes property"

if(functionKaNaam.prototype){
    console.log("prototype is present");
}else{
    console.log("prototype is not present");
}

// ~ly 

const Fname = {
    key1 : "value1"
}

if(Fname.prototype){
    console.log("prototype is present");
}else{
    console.log("prototype is not present");
}

// ~ly

const aName = ["fafa", 23];
if(aName.prototype){
    console.log("prototype is present");
}else{
    console.log("prototype is not present");
}

functionKaNaam.prototype.abc = "abc";
functionKaNaam.prototype.abcd = "abcd";
functionKaNaam.prototype.sing = function(){
     return "hahahah";
};
console.log(functionKaNaam.prototype);
console.log(functionKaNaam.prototype.sing());
