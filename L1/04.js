// string indexing and trim() method
"use strict";

let firstName = "rishabh";
let middleName = "surendra";

console.log(firstName[7]);  // undefined obv
console.log(firstName[0]);
console.log(middleName.length);
var typicalName = 'hfksfjlsafsofjslfsw';
console.log(typicalName[typicalName.length-1]);  // last letter
console.log(typicalName[typicalName.length-2]);

//

let badaName = '   a horse  ';  // empty spaces are also counted since they are valid characters
console.log(badaName);
console.log(badaName.length);
badaName.trim();
console.log(badaName.length);  // strings are immutable, so js wont change the actual string, but give u a new string witih trim() method. hence badaName is still of 12 length.

let newString = badaName.trim();
console.log(newString);
// console.log(newString.length);   // note, middle spaces are not trimmed here as u can see obv
console.log(" ");

badaName = badaName.trim();
console.log(badaName);
console.log(badaName.length);
// here it happend bcz we kinda re declared it.

