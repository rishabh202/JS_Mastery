"use strict";
// problems in previous code


function createUser(firstName, age, email, address) {
    const user = {};
    user.firstName = firstName;
    user.age = age;
    user.email = email;
    user.address = address;


    user.aboutUser = function () {
        console.log(`User name is ${this.firstName} and age is ${this.age}`)
    };
    user.is18 = function () {
        return this.age >= 18;
    };

    return user;

}

const userone = createUser("Rohan", 9, "123@gmail.com", "somewhere");
const usertwo = createUser("Das", 19, "12@gmail.com", "somewh");
const userthree = createUser("Roha", 90, "1@gmail.com", "some");


// aese hokya raha hai ki jitne baar user ban rhe hai, utne baar methods ban rahe hai, aur utne methods humara memory me store honge, while method is same, toh apne ko krna kya chaiey ki method ek hi baar bane but, call apun kitne bhi baar kre

// so what we can do is ki store methods in different object

const empMethods = {
    aboutEmp : function () {
        return `Emp name is ${this.firstName} and age is ${this.age}`
    },
    is16 : function () {
        return this.age >= 16;
    },
}

function createEmp(firstName, age, email, address) {
    const emp = {};
    emp.firstName = firstName;
    emp.age = age;
    emp.email = email;
    emp.address = address;
    emp.about = empMethods.aboutEmp;  // see here internally js only store the reference/address of that object
    emp.is16 = empMethods.is16;
    
    return emp;
    
}

const empone = createEmp("Rohan", 9, "123@gmail.com", "somewhere");
const emptwo = createEmp("Das", 199, "12@gmail.com", "somewh");
const empthree = createEmp("Roha", 90, "1@gmail.com", "some");

console.log(empone.about());
console.log(emptwo.about());
