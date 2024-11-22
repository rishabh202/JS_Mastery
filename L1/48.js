"use strict";
// every method

const nums = [1,2,3,4,5,6,7,8,9,10];
// suppose we want all the even numbers 
// every method also take callback as an input

const evenNums = nums.every((num)=>num%2===0);
// see here callback function return a boolean value
// every method aslo return boolean value, it will give true only if callback is always true, ofc.
console.log(typeof evenNums, evenNums);


// realistic exmaple
const otherProducts = [
    {productId: 1, productName: "soap", price: 9000},
    {productId: 2, productName: "pen", price: 2000},
    {productId: 3, productName: "book", price: 800},
];

// check if all products ka price is less than 10k

 const answer = otherProducts.every((products)=>products.price<10000)
 console.log(answer);
 