"use strict";
// This keyword
console.log(this);
console.log(window); 
// 
// This and Window are the same thing in JS if u write here like this.
console.log(this===window);

// see
function myFunc(){
    console.log('hello world');
}
console.log(myFunc);  // u are printing the function, not calling
myFunc();  // This is calling

console.log(window);
// All the functions are also added to this window, if u will see, this myFunc is also added.

// so we can also do
window.myFunc();

function myFunc2(){
    console.log(this);
}
window.myFunc2(); // see if myFunc2 ko kon call krraha hai? -> window object! hence qki hum this ko console log kr rhe hai toh islie, window object print hoga, as we learnt in previous file.

// But this can create problems sometimes
// so hence we use "use strict"

function myFunc3(){
    console.log(this);
}
myFunc3(); // now undef

// -x-

// Simple baat, use strict use krenge toh window object nai aaega, (undef aaega) and use strict nai use krenge toh window object aaega

