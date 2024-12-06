"use strict";

// closures is simply ki jb koi function kisi function se return hota hai, toh woh apne saath, apne local memory ke variables hai unko saath leke return hota hai

function outFunc(){
    function innerFunc(){
        console.log("hello world");
    }
    
    return innerFunc;  
} 

const ans1 = outFunc();
ans1();


// see video lectures

// closures is simply ki jb koi function kisi function se return hota hai, toh woh apne saath, apne local memory ke variables hai unko saath leke return hota hai


function printFullName(firstName, lastName){
    function printName(){
        console.log(firstName, lastName);
    }
    return printName;
};

const ans = printFullName("rishabh", "shukla")
ans();

// functions inside funtions return with the variable of their lexical scope
// i.e inner function, outer function k cheezo ko appect kr skta hai