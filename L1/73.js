"use strict";
// 2015 /es6
// class keyword
// classes are fake in JS, fake in the sense internally Js dont use classes.

function CreateUser(firstName, age){
    this.firstName = firstName;
    this.age = age; 
}

CreateUser.prototype.about = function(){
    return `Username is ${this.firstName} and age is ${this.age}`
}

const user1 = new CreateUser("Rishabh", 6);
const user2 = new CreateUser("Rohan", 60);

// we can make this with classes also.

class CreateEmp{
    constructor(firstName, empID, empAge){
        console.log("Constructor Called");
       this.firstName = firstName;
       this.empID = empID;
       this.empAge= empAge;
    }

    about(){return `Username is ${this.firstName} and age is ${this.age}`}
    is21(){return this.empAge>=21}
    func(a){console.log(a)}
}

// dono same hi kaam hora hai internally.

// and we will obv need new keyword for this
// const emp1 = CreateEmp("Rohan", 56, 23); // error
const emp1 = new CreateEmp("Rohan", 56, 23);

// class constructor can only be called/invoked with new keyword
console.log(typeof emp1, emp1);
console.log(emp1.firstName);
console.log(emp1.empAge);
console.log(Object.getPrototypeOf(emp1));