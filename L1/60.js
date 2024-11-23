"use strict";
// apply 

// Apply
// Apply is ki instead of this extra args ko directly pass krna, we can pass a array of it



const std1 = {
    firstName: "Rishabh", 
    age: 19, 
    about: function(hobby, musician){
        console.log(`person's name is ${this.firstName} and person's age is ${this.age}, ${hobby}, ${musician}`)
    }
}

const std2 = {
    firstName: "Ana", 
    age: 9, 
}

std1.about.call(std1);
std1.about();
std1.about.call(std2);
// so simply extra args ko as a array pass kro
std1.about.apply(std2, ['bike', 'someone']);

// this was apply 
// now bind
// bind reutrns a function 
const aFunc = std1.about.bind(std2,'bike', 'everyone');
console.log("");
aFunc();

// we can store that in a function, that was bind.