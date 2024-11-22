"use strict";
// iterables
// jispe hum "for of" loop laga ske. like string, array are iterables

const firstName = "Rishabh";

for (let char of firstName){
    console.log(char);
}

const items = ['item1', 'item2', 'item3'];
for (let item of items){
    console.log(item);
}

const users = {
    name: 'rishi', age: 19
}

for (user of users){
    console.log(user);   
;}
// see error aaraha h ki users is not iterable, i.e objects are not iterable


// array like object
// jinke pass length property hoti hai , aur jinko hum index se access kr skte hai for eg: string