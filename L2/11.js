"use strict"

// closures 

// we know that funtions can return fuctions

function myFunc(){
    return 1; 

    // we can return anything, string, array, obj or function 
    // but obv one function can return only once

}

const ans = myFunc();
console.log(ans);

// --- 

function outFunc(){
    function innerFunc(){
        console.log("hello world");
    }

    return innerFunc;  
} 

const ans1 = outFunc();
console.log(ans1);   // whole function, obv since abhi ans me woh funcion aagya hai.
// so call ans1
ans1();

