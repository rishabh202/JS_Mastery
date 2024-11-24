"use strict";
// Now, here why that solution isnt that great

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
    const emp = {};
    emp.firstName = firstName;
    emp.age = age;
    emp.email = email;
    emp.address = address;
    emp.about = empMethods.aboutEmp;  // see here internally js only store the reference/address of that object
    emp.is16 = empMethods.is16;
    emp.sing = empMethods.sing;    
    return emp;
    
}

const empone = createEmp("Rohan", 9, "123@gmail.com", "somewhere");
const emptwo = createEmp("Das", 199, "12@gmail.com", "somewh");
const empthree = createEmp("Roha", 90, "1@gmail.com", "some");

// suppose we want another 1000s of method, so then we will also have to create a reference for method in function, so that can cause problems.

//---

// see there are two objects

const obj1 = {
   key1: "value1", 
   key2: "value2"

}

const obj2 = {
   key3: "value3"
}

console.log(obj1.key1);
console.log(obj2.key3);
console.log(obj2.key1); // undef, but suppose if we want js to, if key1 DNE in obj2 then itself go to obj1 and give key1.

// and 
const obj3 = {};
console.log(obj3);
obj3.keyFour = "value4"  // here we created an empty object and added a key-value pair to it.
console.log(obj3);

//But we can also create an empty object like
const obj4 = Object.create(obj1); 
obj4.aKey = 'keyKaValue';
console.log(obj4);
console.log(obj4.key1); // see it gives values of obj1 hahaha
// first js will check if obj4 has key1, if it does not then jaaegi obj1 k pass



// aisa islie hua qki, obj4 ka proto obj1 hai
// __proto__ === [[prototype]] | the latter is official
// and then prototype in js is something different
// now 
console.log(obj4.__proto__);  // we get obj1
// it is also called as dunder



// so now the solution

