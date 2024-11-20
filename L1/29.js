"use strict";

// computed properties 
const key1 = "objkey1"; 
const key2 = "objkey2"; 

const value1 = "myvalue1"; 
const value2 = "myvalue2"; 

const obj = {
    key1: value1, 
    key2: value2
}
console.table(obj); // we didnt wanted this, but

const objj = {
    [key1]: value1, 
    [key2]: value2
}
console.table(objj);  
// or this, ek hi baat h lol 
const oBj = {}; 
oBj[key1] =  value1; 
oBj[key2] =  value1; 
console.table(oBj); 

// These are computed properties. i.e ki compute kese hota hai.
