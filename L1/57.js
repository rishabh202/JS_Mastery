"use strict";
// Object Oriented JavaScript / Prototypal Inheritance
// Methods

// Waht are methods? -> functions inside objects | as u learnt is TS

const person = {
    firstName: "Rishabh", 
    age: 19, 
    about: function(){
        console.log(`person's name is ${this.firstName}  and person's age is ${this.age}`)
    }
}

console.log(person);
console.log(person.about); // whole function
console.log(person.about()); // undef
person.about();

// If we want to access a variable inside a function in a object we need to use this keyword
// in other words if we want to access a variable in a method we need to use this keyword
// this keyword, access's value only when its running, uske phele nai
// runtime pe malum padta hai

// see, kisi ek function me, this woh object hai, jo object woh function ko call kr raha hai

// like see about ek function hai, aur woh function (about) ko call kr raha hai person. mtlb about method ke andr, jo "this" hai woh person hai.
// ~ly 

// like see

const user = {
    id: 1, 
    userName: "something",
    details : function(){
        console.log(this)
    }  
}

user.details();  // see details pura 'user' hai, so we can extract value from that

// ---- 
console.log("---");

function aadmiInfo(){
   console.log(`addmi's name is ${this.firstName} and age is ${this.age}`)
}

const aadmi1 = {
    firstName: "Rishabh",
    age: 19,
    about: aadmiInfo
}
const aadmi2 = {
    firstName: "Mohit",
    age: 20,
    about: aadmiInfo
}
const aadmi3 = {
    firstName: "Rohit",
    age: 21,
    about: aadmiInfo
}

console.log(aadmiInfo); // obv pura function print hoga, humne call thodi kia
aadmi1.about();
// see, about aadmiInfo wala function hai, as we defined in our aadmi1 object, toh woh call hoga, then "this" aaega, then fir us about ko kon call kr rha hai? aadmi1 hence aadmi uska this hai, toh woh aadmi1 se extract krega
// hence aadmi1.about(); gives us about of aadmi1 only
aadmi2.about();


// ---