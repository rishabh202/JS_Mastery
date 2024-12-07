"use strict";

// 3rd example of closure

// const square = myFunction(2);
// square(6);

// see humko aisa function banana hai ki upr wala code run kr ske

function myFunction(power){
    return function(num){
        return num**power
    }

}

const cube = myFunction(3);
const ans = cube(2);
console.log(ans);

// ~ly

const sq = myFunction(2);
const ans1 = sq(7);
console.log(ans1);

// u can see lec for better understanding

// we can also use arrow function 
// for substraction 
const sub2 = (m2) => {
     return function(num){
        return m2-2;
     }
}

const a = sub2(15);
const b = a(12);
console.log(b);


// also like 
const plus2 = apple =>{
    return orange => apple+2;
}

const z = plus2(98);
// const y = z(11);
const y = z();
console.log(y);



// also like
const plus3 = s3 => r3 => s3+3
const p = plus3(98); // 101
const q = p();
console.log(q);