"use strict";
// new keyword

// with the help of new keyword 
// Object.create(functio.prototype); // this can be got ridden of
// that is ki 

// so this is also called as constructor function.
// so how can a developer know that a function is made to be called with new keyword? so we have a convention for that ki capitalize the first letter of such functions
function CreateUser(firstName, age){
    this.firstName = firstName;
    this.age = age; 
    // return vgera bhi nai chiaye, as new keyword does that, it returns this.
}

CreateUser.prototype.about = function(){
    return `Username is ${this.firstName} and age is ${this.age}`
}

const user1 = new CreateUser("Rishabh", 6);
const user2 = new CreateUser("Rohan", 60);
console.log(user1);
console.log(user1.about());
console.log(user2);
console.log(user2.about());

// soo 
// new keyword
// 1. empty object; this = {}
// 2. returns this | so we done have to define and return that in function.
// 3. helps get rid of that line
// above do toh same hi hai as prevs. lol
