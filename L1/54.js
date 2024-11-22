"use strict";
// Maps 

// Maps Data structure and the map method of array are different things, dont confuse it. This is map object. not method.
// map is an iterable
// store data in ordered fashion
// store "key value pair" (like object)
// duplicate "keys" are not allowed like objects
// different between maps and objects

// object literal refers to the syntax of defining object and key-value pair; from curly braces to defining key:value pair.
// Key are mostly in string or sometimes in symbols, but mostly keys are in string.

// objects can only have string or symbol as key 

// in maps you can use anything as key like array, number, string 


const person = {
    firstName: "Rishabh", 
    age: 19,
    96: 69
}
console.log(person.firstName);   // accessed by dot notation 
console.log(person["firstName"]); //  accessed by bracket notation 
console.log(person);
console.log(person['96']);
console.log(person[96]);

for (let key in person){
    console.log(typeof key, key);
}

// key value pair
const person2 = new Map();
console.log(person2);
person2.set("firstName", "Rishabh");
person2.set("age", 7);
person2.set(21, 12);
person2.set(['1', 2, "three"], "array");
person2.set({one: 1}, "object literal");
console.log(person2);
// The main difference between object and Map is that ki in map key can be of any type
// 
console.log(person2["firstName"]); //we cant access it like this
// we have get method for that
console.log(person2.get('firstName'));
console.log(person2.get(21));
console.log(person2.keys());  // That is iterable
for (let key of person2.keys()){
    console.log(typeof key, key);
}


// maps are iterable, so we can use loops directly on Map
console.log("");
for(let key of person2){
    console.log(key)  // array dera hai
    console.log(Array.isArray(key));
}

console.log("---");
// so we can also destructure it 
for(let [key, value] of person2){
    console.log(key, value);
}

// Maps store data in orders, while object do not.
//

console.log("---");
// we can also do like 
const user = new Map([["firstName", "Rishabh"], [96, "sixtynine"], [['ninetysix'], 69], ['one', 'two']]);  // see, ek array hai, aur usme ek aur array hai, aur usme key value pair hai
console.log(user);

// v simple

// now suppose, 
const aadmi = {
    id: 1,
    firstName: "Rohan"
}
// iss object me we want to add additional things but not to this original object, but by Map

const aadmi2 = {
    id: 2,
    firstName: "Das"
}

const extraInfo = new Map();
extraInfo.set(aadmi, {age: 8, gender: "male"});
extraInfo.set(aadmi2, {age: 18, gender: "female"});
console.log(extraInfo);
console.log("");
console.log(aadmi.id);
console.log(extraInfo.get('gender')); // undefined obv
console.log(extraInfo.get(aadmi)); // extraInfo me ek hi key hai, ko ki hai aadmi
console.log(extraInfo.get(aadmi).age);
console.log(extraInfo.get(aadmi).gender);  // aese kr skte hai
console.log(aadmi2.id);
console.log(aadmi2.firstName);
console.log(extraInfo.get(aadmi2).age);
console.log(extraInfo.get(aadmi2).gender);

// -x-