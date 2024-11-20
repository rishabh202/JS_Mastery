"use strict";
// objects in array 


const users = [
    {userID: 1, firstName: 'harshit', gender: 'male'},
    {userID: 2, firstName: 'mohit', gender: 'male'},
    {userID: 3, firstName: 'rohit', gender: 'male'},
    {userID: 4, firstName: 'vinit', gender: 'male'}, 
]
console.table(users); 
for(let user of users){
  console.log(user); 
}
for(let user of users){
  console.table(user.firstName); 
}
