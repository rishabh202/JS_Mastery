"use strict";
// some method

const nums = [1,2,3,4,5];
// const nums = [3,1,5];
// kya ek bhi number hai, jo even hai.

// also takes callback

const ans = nums.some((num)=>num%2===0);
console.log(ans);


// realistic example

const otherProducts = [
    {productId: 1, productName: "soap", price: 9000},
    {productId: 2, productName: "pen", price: 2000},
    {productId: 3, productName: "book", price: 800},
    // {productId: 4, productName: "phone", price: 10000},
    {productId: 4, productName: "phone", price: 9999},
];

// we want to check kya koi bhi aisa product h, jiski vale 9999 se jyada hai

const answer = otherProducts.some((products)=>products.price>9999);
console.log(answer); 

// Thats it
