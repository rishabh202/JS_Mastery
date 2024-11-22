"use strict";
// Reduce method

const arr = [1,2,3,4,5];

// reduce function take callback function as a input, adn that callback function can be, function exp or decl, or call back or anonymous function.

const sum = arr.reduce((accumulator, currentValue)=>{return accumulator+currentValue});
console.log(sum);
console.log(typeof sum);

// accumulator, currentValue, return 
// 1,            2,            3
// 3,            3,            6
// 6,            4,            10
// 10,           5,            15

// Thats how reduce works

// we can also pass initial value, after passing default value, accumulator will start with it and then current value will be 1.

const sum2 = arr.reduce((accumulator, currentValue)=>{return accumulator+currentValue}, 100);
console.log(sum2);
// accumulator, currentValue, return 
// 100,            1,            101
// 101,            2,            103
// 103,            3,            106
// 106,           4,            110
// 110,           5,             115

// another example 

const userCart = [
    {productId: 1, productName: "soap", price: 9000},
    {productId: 2, productName: "pen", price: 90},
    {productId: 3, productName: "book", price: 800},
];

const price = userCart.reduce((totalPrice, currentPrice)=>{return currentPrice.price + totalPrice}, 0);
console.log(price);

// totalPrice, currentPrice, return 
// 0,          {},           9000
// 9000,       90,           9090
// 9090,       800,          9890


