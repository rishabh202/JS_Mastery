"use strict"
// use prototype in our previous example

// const empMethods = {
//     aboutEmp : function () {
//         return `Emp name is ${this.firstName} and age is ${this.age}`
//     },
//     is16 : function () {
//         return this.age >= 16;
//     },
//     sing: function (){
//         return `lalalalalala`;
//     }
// }

function createEmp(firstName, age, email, address) {
    const emp = Object.create(createEmp.prototype);
    emp.firstName = firstName;
    emp.age = age;
    emp.email = email;
    emp.address = address;
    return emp;
    
}

// ---

// so no need for a separate object
console.log(createEmp.prototype);
// as we have prototype
createEmp.prototype.aboutEmp = function () {
    return `Emp name is ${this.firstName} and age is ${this.age}`
};
createEmp.prototype.is16 =  function () {
    return this.age >= 16;
};
createEmp.prototype.sing = function (){
    return `lalalalalala`;
};

// now

const emp1 = createEmp("Emp1", 89, "","address");
const emp2 = createEmp("Emp2", 9, "123@gmail.com","pataaa");

console.log(emp1.firstName);
console.log(emp1.address);
console.log(emp1.aboutEmp());
console.log(emp1.is16());
console.log(emp1.sing());
console.log("---")
console.log(emp2.firstName);
console.log(emp2.address);
console.log(emp2.aboutEmp());
console.log(emp2.is16());
console.log(emp2.sing());
console.log(emp1);


// So what is __proto__ or [[prototype]] and prototype
// the latter is an object while the first is just a reference