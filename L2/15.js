"use strict"
// closures example 4

// suppose we want to call a function only once

// const myfunc = hy = name => hy+name;
// const a = myfunc("apple");
// const b = b();
// console.log(b)


// solution

function func() {
    let counter = 0;
    return function () {
        if (counter<1) {
            console.log("you called me for the first time")
            counter++;
        } else {
            console.log("I have already been called once")
        }
    }
}

const myfunc = func();  // obv myfunc bhi ek function bn chuka hai
myfunc();
myfunc();
myfunc();
console.log(" ");
const myfunc1 = func();  
myfunc1();
myfunc1();
myfunc1();
