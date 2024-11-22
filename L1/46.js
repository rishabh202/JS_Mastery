"use strict";
// sort method

// 56,891,9656,622
// sort => 56,622,891,9656

const numbers = [56,891,9656,622];
// sort method mutates the original array.
console.log(numbers);
numbers.sort();
console.log(numbers);  // ascending sort
// ye bhi as a string hi sort hua hai

// forEach, map and filter methods does not changes the original array, however sort changes the original array and, map and filter gives new array. while foreach method does not gives new array.

const anotherNums = [5,9,400,1200,3000];
console.log(anotherNums);
anotherNums.sort();
console.log(anotherNums);  // js sorts them as a string
// and strings are sorted as per ASCII values

const userNames = ['rishabh', 'abcd', 'aaryan', 'Apple', 'Zoo','harhist', 'lana', 'mary'];
console.log(userNames);
userNames.sort();
// so this will sort according to ASCII values (dictionary)
console.log(userNames);

// so how to sort numbers???

// sort function can also take callback as an input
anotherNums.sort((a,b)=>a-b);   // ascending
console.log(anotherNums);

// But how this worked?
// see 
// 400, 9
// a-b --> 391 (positive) then --> b,a
// 9, 400

// 1200, 3000
// a-b --> -1800 (negative) then --> a,b
// 1200, 3000

// so a-b gives ascending sort and b-a gives desceding sort
anotherNums.sort((a,b)=>b-a);   // descending
console.log(anotherNums);

console.log("");
// realistic example
// site like flipkart have lowToHigh and HighToLow price

const products = [
    {productId: 1, productName: "soap", price: 9000},
    {productId: 2, productName: "pen", price: 90},
    {productId: 3, productName: "book", price: 800},
    {productId: 4, productName: "pencil", price: 8},
    {productId: 5, productName: "shirt", price: 499},
    {productId: 6, productName: "jeans", price: 500},
];

// lowToHigh

console.log(typeof products, products);
console.log(Array.isArray(products));
const lowToHigh = products.sort((a,b)=>a.price-b.price);
console.log(lowToHigh);
console.log(products);
// now here lowToHigh and products do array bn gye hai 
console.log(lowToHigh===products) // true, but woh do alg alg array bane hai, but woh bane aese hi ki tu ek ko change krega toh dusra bhi same aega, qki tune direcly whi assign kr dia hai.
lowToHigh.push({productId: 7, productName: "tshirt", price: 250}); //ye sort nai hua qki sort upr kia hai
console.log(lowToHigh);
console.log(products);

console.log("");
console.log(products.sort((a,b)=>a.price-b.price)); // lowToHigh, ascending 
console.log(products.sort((a,b)=>b.price-a.price)); // HighToLow, descending 

// If we do not want to change our acutal array we can clone it 

const otherProducts = [
    {productId: 1, productName: "soap", price: 9000},
    {productId: 2, productName: "pen", price: 2000},
    {productId: 3, productName: "book", price: 800},
];

// const newOthrProducts = otherProducts.sort((a,b)=>a.price-b.price);
// above is not cloning, above is direct assigning.
const newOthrProducts = otherProducts.slice(0).sort((a,b)=>a.price-b.price);
console.log(otherProducts);
console.log(newOthrProducts);







