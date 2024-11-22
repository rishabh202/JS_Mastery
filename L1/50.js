"use strict";
// fill method

// smj we want to make an array aur uss array me, 10 items fill krne hai, aur woh 10 k 10 hone chaiye -1

const myArr = new Array(10).fill(-1);
console.log(myArr);

const myArr1 = new Array(10).fill("Rishabh");
console.log(myArr1);

// another use is

const newArr = [1,2,3,4,5,6,7,8,9,10];
// now suppose humko 3,4,5 ko zero krna hai. so.
newArr.fill(0,2,5 );  // (kya krna hai, khn se krna hai, khntk krna h; uske ek aage)
// ek aage qki whn tk jaaega, include nai krega hence ek aage.
console.log(newArr);

// fill changes the original array.
