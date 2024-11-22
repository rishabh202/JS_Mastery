"use strict";
// sets

// Sets (it is iterable)
// stores data  
// sets also have its own methods
// No index-based access, hence sets do not have length property
// Order is not guaranteed
// unique items only (no duplicates allowed)

const items = ['item1', 'item2', 'item3'];

const numbers = new Set([1,2,3,4,4]);  // we can store/put any iterables in this parenthesis.
console.log(numbers);
const naam = new Set("Shweta");
console.log(typeof naam, naam);   // typeof set gives object

const friends = new Set();
friends.add("Mary");
friends.add(2);
friends.add(3);
friends.add(2);
friends.add("Sanika");
friends.add("Sanika");
friends.add(items);
friends.add(items);  // ye nai hoga, lekin agr hum wps array define kre toh ho jaega since tb toh memory alg alg hojaegi na, like 
friends.add(['one', 'two']);
friends.add(['one', 'two']);   // see hogya, since both are diff array.
friends.add(369);
console.log(friends);

// u can also store different datatypes in set.


// 
friends.has("sanika");
friends.has(2);
friends.has("Sanika");
friends.has([]);
friends.has(items);
friends.has(89);  

// lol has method only return, console log me kn aaaega lol 
// we can use with if-else 

if(friends.has(2)){
    console.log('2 is present in friends');
}
if(friends.has("sanika")){
    console.log('sanika is present in friends');
}
if(friends.has("Sanika")){
    console.log('Sanika is present in friends');
}

// sets are iterables, so means we can use for-of loop
console.log("Sets in Js are iterables")
for (let friend of friends){
    console.log(friend);
}

// u should use sets only when u know ki u have unique values, like userIDs

// also like for eg 
const myArr = [1,2,3,5,5,6,4,9, 1, 2]
// we want unique elements from this array, so we can use our knowledge of sets
let uniqueEle = new Set(myArr);
console.log(uniqueEle);
console.log(myArr);

// to find the length of a set, we can use for of loop.
let length = 0;
for (let l of uniqueEle){
    length++;
}
console.log(length);