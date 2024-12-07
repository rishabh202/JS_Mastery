"use strict";

// example 2 of closure

function hello(x){
    const a = "varA";
    const b = "varB";   
    return function(){
        console.log(a,b,x);
    }
}

const ans = hello("arg");
ans(); 


// see humne call kia hello function ko, toh woh return krra hai ek function,
// and usko humne store kia ans variable me, toh ans is now a function 

// ans call krne pe aisa aisa hoga. .... and x k jgh pe arg print hojaega.
// simple