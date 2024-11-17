// let, const keyword
"use strict";

// NOTE: Its a good practice to start variables name with small letter and use camelCase for JS
// We can also use let to declare variables instead of var, and most probably we will use let only, since its beneficial 

let one4 = "14";
console.log(one4);

const pi = '3.14';
// see const use krke variable nai banaya. constant banaya hai. (LOGIC)
// constant declare kia hai. variable declare nai kia h

console.log(pi);   // now obv it is a constant and hence its value wont change, unlike variable
// pi = '6546';   // This will obv throw error since it is constant
console.log(pi + 2.00);    // lol its giving wrong mathematics obv since its string
// Above js didnt converted pi to number and rather did string concatenation by converting 2.00 to string; just while operating.

// See it converts while operating, but does not actually changes it.

console.log(typeof pi);

console.log(pi - 2);  // here it will convert string (pi) to number then perform and some other things.

console.log(typeof pi);
console.log(pi * 2);
console.log(pi ** 2);
console.log(pi / 2);
console.log(typeof pi);

