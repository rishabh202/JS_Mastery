"use strict";
// Important array methods
// map method

const numbers = [1,2,3,4,5];
// map method also take input a call back function

// lets use function expression to make a function first
const square = function(num){
        return num*num;
}

let sqNum = numbers.map(square);
// Map function always creates a new array.
console.log(sqNum);
console.log(typeof sqNum);
console.log(Array.isArray(sqNum));

const cube = function(num){
    console.log(num**3)
}

let cbNum = numbers.map(cube);
console.log(cbNum);

// 
console.log(numbers.map((sqrt)=>{console.log(sqrt**1/2)}));
numbers.map((sqrt)=>{console.log(sqrt**1/2)});
console.log(numbers.map((sqrt)=>{return sqrt**1/2}));  // see map ek array deray, hence it is imp to return 

numbers.map((number, index)=> {console.log(`index is ${index} and number is ${number}`)});
let newArry = numbers.map((number, index)=> {return `index is ${index} and number is ${number}`});
console.log(newArry);

// exmpale

const users = [
    {firstName: "Rishabh", age: 19}, 
    {firstName: "Adam", age: 90}, 
    {firstName: "Lana", age: 14}, 
    {firstName: "Honey", age: 19}, 
]

users.map((user)=>{console.log(user.firstName)}); // better to not do like this since map method store it in array 
// now instead of storing the array, lets directly print it 
console.log(users.map((user)=>{return user.firstName}));
