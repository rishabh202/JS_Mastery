"use strict";
// optional chaining

const user = {
    firstName: 'Rishabh',
    address: {houseNumber: '1234'},
    // pata: {ghr: 'tree'}
}

console.log(user.firstName);
console.log(user.address);
console.log(user.address.houseNumber);
console.log(user.pata)  // undef
// console.log(user.pata.ghr)  // error

// see many times aisa hota hai ki, hume nai pta ki humare object me koi property h ya nai, kya pta abhi nai hai pr next second aa jaae,
// toh islie hum ye chahate hai ki error na deke undefined dede
// so we can use ?

console.log(user?.firstName);
console.log(user?.address?.houseNumber);
console.log(user?.pata);
// console.log(user?.pata.ghr); // error
console.log(user?.pata?.ghr)  // undef obv

// ? basically checks if user exists or not, if does, then only it proceeds. i.e if it is undef or null then dont proceed. 

// 

// let employee = {
//     salary: 120000,
// }

console.log("");
let employee;
console.log(employee);
console.log(employee?.salary);
console.log(employee?.role);

// this (optional chaining) is mostly used in nested objects
