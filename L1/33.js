"use strict";
// nested destructuing 


const users = [
    {userID: 1, firstName: 'harshit', gender: 'male'},
    {userID: 2, firstName: 'mohit', gender: 'male'},
    {userID: 3, firstName: 'rohit', gender: 'male'},
    {userID: 4, firstName: 'vinit', gender: 'male'}, 
]


const [user1, user2, user3] = users; 
console.log(user2); 
console.log(user2.firstName);  
console.log(user2.firstName, user1.userID);  

const [{firstName: user1Name}, ,{firstName}] = users;  // user1Name and gender is the variable
console.log(user1Name);  //harshit
console.log(firstName);   // rohit  // see vdo whenever want 
