"use strict";

// call back functions 

// call back function is ki hum functions me functions daal de.
// see hum functions me kx bhi daale woh kaam krta h like see

function abc(a){   // a parameter hai, aur woh kx bhi hoskta hai
      console.log(a);
}

abc(5);
abc("hy");
abc(['this is an array']);
abc({"this is obj": "value", 2: 4})
abc(); // undef

// call back functions me hum function me fuunction daalte haii aur call krke jo function as a parameter daala h usko access krte hai


function myFunc2(){
    console.log("inside myFunc2");
}

function myFunc(callback){
    console.log("Hhelllo");
    callback();
}

myFunc(myFunc2);

//

function merafunc2(name){
    console.log('inside my meraFunc2'); 
    console.log(`Your name is ${name}`); 
}

function merafunc(callback){ // callback is just a name, koi method nai hai
    console.log("This is meraFunc khikhikhi"); 
    callback('Suyash'); // jese hi ye function execution me humne call kia, parameter ko, woh parameter wale function me jaaega
    // but name jb aese parameter me funcion lete hai toh callback hi likhte hai.
}

merafunc(merafunc2); 

// see lec
console.log("");

function aFunc(namee){
    console.log("insde aFunc");
    console.log(`Your name is ${namee}`)  // ye yhn pe waps callback maar raha hai

}

function bFunc(callback){
    console.log("this is b function");
    callback();  // since yhn pe kn h; undef aaega

}

bFunc(aFunc); 
