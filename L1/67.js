"use strict";
// solution using object.create

const empMethods = {
    aboutEmp : function () {
        return `Emp name is ${this.firstName} and age is ${this.age}`
    },
    is16 : function () {
        return this.age >= 16;
    },
    sing: function (){
        return `lalalalalala`;
    }
}

function createEmp(firstName, age, email, address) {
    const emp = Object.create(empMethods);
    emp.firstName = firstName;
    emp.age = age;
    emp.email = email;
    emp.address = address;
    return emp;
    
}

const empone = createEmp("Rohan", 9, "123@gmail.com", "somewhere");
const emptwo = createEmp("Das", 199, "12@gmail.com", "somewh");
const empthree = createEmp("Roha", 90, "1@gmail.com", "some");

console.log(empone);
console.log(emptwo);
console.log(empthree);
// ---
console.log("---");

console.log(empone.address);
console.log(empone.aboutEmp());
console.log(emptwo.is16());
console.log(empthree.is16());
console.log(empthree.sing());
console.log(empthree.firstName);

// so this __proto__ creates a bond !!!