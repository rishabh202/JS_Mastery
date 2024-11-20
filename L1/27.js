"use strict";

// objects

// objects, note objects dont have index, objects are also reference type.  saaer ref types ek hi tarah se store hote h pc ke memory me 
// note from array we use square braces, but for objects we use curly braces

const person = {name:"Rishabh", age:18}; 
console.table(person); 
console.log(typeof person);
console.log(person.name);   // thjs is dot notation
console.log(person.age); 

// You can even store a array in objects
const moreAboutperson = {
    name: 'Rishabh Shukla', 
    age: 18,  
    hobbies: ["reading", "sports", "listening music", "coding etc" ]
}
console.table(moreAboutperson); 
console.log(moreAboutperson.hobbies); 

// how to add key value pair to object
person.gender = 'male'; 
console.table(person); // another way to add below

person["stream"] = "Science"; 
console.table(person)

// another way to access data
console.log(person["gender"]); // This is bracket notation
console.log(person["age"]); 
// console.log(person[age]);  // will throw error. since in JS keys are in string by default
console.table(person); 

console.log(" ");

// if we want space in keys
const books = {
    Genre: ['Self help', ' Philosophy', " Novels"],  
    "Number of Books": 21  // here number of books is a key
}
console.table(books); 
// console.log(Genre.'Number of Books'); 
console.log(books['Number of Books']);   // we will need bracket notation to access this. Dot notation se error aa jaaega. i.e hum kr hi nai skte dot notation se.

console.log(" ");

// now suppose, we want to add key value pair to a object and that key must be a value of a variable. toh kese?
const key = 'luckyNumber';    // wrong obv
person.key = 56;    // we cant do it by dot notation
console.table(person);
person[key] = 56;
console.table(person);


books.key = 'Paperback and Hardcovers'; 
// books["key"] = 'Paperback and Hardcovers'; // issey ghnta kn hora obv
books[key] = 'Paperback and Hardcovers'; 
console.table(books);