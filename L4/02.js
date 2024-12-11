"use strict";
// Traversing DOM Tree

// child relationship
const rootNode = document.getRootNode();
console.log(rootNode);
console.log(rootNode.childNodes);
const htmlElementNode = rootNode.childNodes[0];
console.log(htmlElementNode);


console.log(htmlElementNode.childNodes);
// see html k baad wala space browser automatically nai consider krta and bakike krta hai 

const headElementNode = htmlElementNode.childNodes[0];
console.log(headElementNode);

const textNode = htmlElementNode.childNodes[1];
console.log(textNode);

const bodyElementNode = htmlElementNode[2];
console.log(bodyElementNode);


// parent relationship 
console.log(headElementNode.parentNode);

// ~ly etc 

// sibling relationships
console.log(headElementNode.nextSibling);
// console.log(headElementNode.nextSibling.nextSibling);


// browser uses document to create the ui 

// white space normal hone ki wjh se we dont get to see extra space.

// to ignore the text we can use like
// ig these things are changed/updated in latest version of js 
// so skip as of now

console.log(headElementNode.childNodes)

// skipped this part from 5:07:00