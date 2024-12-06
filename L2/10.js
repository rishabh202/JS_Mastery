"use strict";

// Scope chain

const lastName = "shukla";

const printName = function(){
    const firstName = "Rishabh";
    function myfuc(){

        console.log(firstName);
        console.log(lastName);
    }
    myfuc()

}
printName();