"use strict";
// some revision

// see let and const ki bhi hositing hoti hai, i.e code execute hone se phele woh memory me present rhte hai

// uncaughtReference error -> cannot access 'variable_name' without initializing. come when we have a variable by we hanvent put any value.

// uncaughtReference error -> 'variable_name ' is not defined comes when we do not have a varible

let paagaa;
// jbtj koi variable initialize nai hota, tbtk woh TDZ (temporal dead zone) me rhtayy
console.log(paagaa);  // undef 
paagaa = 86;
console.log(paagaa);  
 
// same u cannnot do with const, const ko initialize krna hi pdtay .
// const apples; // see the error, const declarations must be initialized.


// 
// const aName;    // error; as const h, we must define.
console.log(typeof aName)
// let aName = "someo";

