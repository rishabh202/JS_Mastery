"use strict";
// Functions returning functions

// function returning function (do revise all)

function aFunc(){
    function helllo(){
      console.log('yo');  
    }
    return helllo; 
    return 'yo';
    return {name: "rishabh", age: 18};  // These two aren't printed ek hi cheej return kregea obv
}

const afuncKa = aFunc(); 
console.log(afuncKa);   // now as u can see afuncka bhi function ban gaya hence 
afuncKa(); // check vdo whereever u cant understand 


function vFunc(){
    function hello(){
        return "HelloWorld";
    }
    return hello;
}

const ans = vFunc();
console.log(ans());

// also like

function gFnc(){
    return function(){
        return "helloworld";
    };
}

const uttar = gFnc();
console.log(uttar());
console.log(uttar);