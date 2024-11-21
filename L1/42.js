"use strict";
// important array methods [forEach, map, filter, reduce]


const sankhyas = [4,8,12,16,20]; 
function ps2(number, index){
    console.log(`index is ${index} number is ${number}`); 
    console.log(`${number}*2 = ${number*2}`); 
}
ps2(sankhyas[2], 2); 

for(let i = 0; i < sankhyas.length; i++){
    // console.log(i); 
    ps2(sankhyas[i], i); 
} 

console.log("Instead of the above for loop, we can use below method");

//  instead of for loop, we can use for each method, for each methods, take callback as input
sankhyas.forEach(ps2);

// we can also define the call back function direcly in the parameter of foreach
sankhyas.forEach(function(number, index){
    console.log(`Index is ${index} and number is ${number} `);
});

// exmaple

const users = [
    {firstName: "Rishabh", age: 19}, 
    {firstName: "Adam", age: 90}, 
    {firstName: "Lana", age: 14}, 
    {firstName: "Honey", age: 19}, 
]

users.forEach((user)=> {console.log(user.firstName)});
users.forEach(function(user){
    console.log(user.firstName, "is of age", user.age);
})

// obv we can also use loops 
// like for of loop, or normal for loop like we did above.

for (let user of users){
    console.log(user.firstName);
}