"use strict";
// Lexical scope

const myVar = 'Value zero'; 

function myApp(){   // Function declaration
    // const myVar = 'Value one'; 
    function my_func(){   // Function declaration
        console.log("First Inside my_func");   // see vdo from 5:36:30  IMMPP Concept
        // const myVar = 'Value two'; 
        // const myVar = 'Value two'; 
        console.log("inside my_func", myVar); 
    }
    const my_func2 = function(){}   // function expression
    const my_func3 = () => {}  // This is arrow function
    console.log(myVar); 
    my_func(); 
}
myApp(); 

// myApp() call hua toh, then myVar console log me aaya, fir my_func call hua, and so on. 

// i.e phele apne function me check kregi, nai hai toh parent me check kregi, whn bhi nai h toh, global me check kregi. That is called lexical scope
