"use strict";

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

// suppose we want keys, as it is a key value-pair, so if we want keys
for (let key in user1){
    console.log(key);
}

// it also gives the key of the prototype object.
// so if we want the key without the prototype, i.e just of the main object. 
// we have a hasOwnProperty();
// hasOwnProperty is just that ki, if the object itself has that property or is it inherited?
for(let key in user1){
  if(user1.hasOwnProperty(key)){ // now it will print only if its khud ka property
    console.log(key);
  }
}