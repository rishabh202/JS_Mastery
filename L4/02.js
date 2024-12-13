"use strict";
// Traversing DOM Tree

// child relationship
const rootNode = document.getRootNode();
console.log(rootNode);
console.log(rootNode.childNodes);
// node list is an array like object, so we can se indexing
const htmlElementNode = rootNode.childNodes[0];
console.log(htmlElementNode);
console.dir(htmlElementNode);


console.log(htmlElementNode.childNodes);
// see html k baad wala space browser automatically nai consider krta and bakike krta hai 

const headElementNode = htmlElementNode.childNodes[0];
console.log(headElementNode);


const textNode = htmlElementNode.childNodes[1];
console.log(textNode);

// 
console.log("");

const bodyElementNode = htmlElementNode.childNodes[2];
console.log(bodyElementNode);


// parent relationship 
console.log("parent")
console.log(headElementNode.parentNode);

// ~ly etc 

// sibling relationships

console.log("sib")
console.log(headElementNode.nextSibling);
console.log(headElementNode.nextSibling.nextSibling);
console.log(headElementNode.nextSibling.nextSibling.nextSibling);  //null
console.log(headElementNode.nextElementSibling);  // body hi de dega
// next element sibling ignore the empty texts


// browser uses document to create the ui 

// white space normal hone ki wjh se we dont get to see extra space.
// if we use white-space pre than extra places will be shown,

console.log("");
console.log(headElementNode.childNodes)

// 
// to change or edit using js/dom
const h1 = document.querySelector("h1");
console.log(h1);
console.log(h1.parentNode);
const h1Parent = h1.parentNode;
h1Parent.style.color = "#efefef";  
h1Parent.style.backgroundColor = "#333"

// now ~ly for etc also
const body = h1.parentNode.parentNode;
console.log(body);
body.style.backgroundColor = "yellow"

//
// u can also directly select body by like 
// const body = document.body
// console.log(body);
// body.style.backgroundColor = "gray"  // commented out as it is now redundant, hence wont work

//
// hum querySelector k andr bhi querySelector use kr skte hai
console.log(" ");
const head = document.querySelector("head");
// console.log(head);  // we have to comment this for next to happen. as of now idk why? lol
const title = head.querySelector("title")
console.log(title);
console.log(title.childNodes);



// suppose we dont want text
const container = document.querySelector(".container") 
console.log(container);  // suppose we dont want the empty texts, so we can like
console.log(container.childNodes);  
console.log(container.children);   // thats how it is done

// children above. 
