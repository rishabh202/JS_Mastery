"use strict";
// Call, apply and bind methods

function myFunc(){
    console.log("hello world");
}
myFunc.call();

// we can also call by functionName.call();
// see suppose we have two objects

const user1 = {
    firstName: "Rishabh", 
    age: 19, 
    about: function(hobby, musician){
        console.log(`person's name is ${this.firstName} and person's age is ${this.age}, ${hobby}, ${musician}`)
    }
}

const user2 = {
    firstName: "Ana", 
    age: 9, 
}

// so now the about function can only be called by user1 and not user2
// so, we can use that user1 ka about for user2 with this keyword and call method.
// see
user1.about("music", "pure music"); // user1 ke details
// same we want for user2
user1.about.call(user2); // so abhi jo this hai, about method k liye woh user2 hai
// user1.about.call(); // undef 2 times, since this do baar hai | use strict hai, islie error dera hai, else undef dega.
user1.about.call(user2, "dance", "pure dance");  // like this, u can also pass extra arguments using call method


// we can also define function outside
function extraInfo(extraArg1){
    console.log(`${this.EId}, Employee ka salary is ${this.salary}, ${extraArg1}`)
}

const emp1 = {
    EId: 1, 
}
const emp2 = {
    EId: 2, 
    salary: 69300
}

extraInfo.call(emp1);  // obv 1, undef
extraInfo.call(emp2); // dono print hoga, 
console.log('---');
extraInfo.call(emp1, "ex1");  
extraInfo.call(emp2, "ex1");  

// this was call.

