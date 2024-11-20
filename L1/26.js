"use strict";
// Array destructuring (imp)

const myArr = ['value1', 'value2'];
let data1 = myArr[0];
let data2 = myArr[1];
console.log('value of data1 is', data1);
console.log('value of data2 is', data2);

let [dataOne , dataTwo ] = myArr;
// const [dataOne , dataTwo ] = myArr;  // const se bana toh we cant change obv
console.log(dataOne, dataTwo);

dataOne = 89;
console.log(dataOne);
console.log(myArr);

//

const [var1, var2] = [5, 3];
console.log('The value of var1 is ', var1); 
console.log('The value of var2 is ', var2); 
// var1 = 89;  // error obv, cant assign to const

console.log(" ")

const myArray = ['value11', 'value12', 'another value', 'other']; 
const [Data1, Data2, Data3] = myArray; 
console.log('The value of data1 is', Data1);
console.log('The value of data2 is', Data2);
console.log('The value of data3 is', Data3);
console.table('The value of Data1 and Data2 and Data3', Data1, Data2, Data3);
console.log(Data1);


console.log("What if array has only one element?")
const newArr = ['wow'];
let [a, b, c] = newArr;
console.log("The value of a is", a);
console.log("The value of a is", b);    // undefined
console.log("The value of a is", c);  // undefined


console.log("What is we want to skip indexes in array?")
const [p, q, , r]= myArray;  // so p = value11, q = value12, r = other
console.log("The value of a is", p);
console.log("The value of a is", q);
console.log("The value of a is", r);


console.log("what if we want only 2 value and others in a separate array?")
let [o, w] = myArray;
let myNewArr = myArray.slice(2);
console.log("the value of o is", o);
console.log("the value of w is", w);
console.log(myNewArr);
// But it can also be done like
let[x, y, ...nayaArr] = myArray;
console.log("the value of o is", x);
console.log("the value of w is", y);
console.log(nayaArr);

// -x-

// // now if we want to store data1 and data2 and data2 in data1 
