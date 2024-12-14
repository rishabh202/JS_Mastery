"use strict";
// Clone nodes

const ul = document.querySelector(".todo-list");
const li = document.createElement("li");
li.textContent = "naya todo";
ul.append(li);
// if we want to do both append and prepend? that wont happen koi ek hi hoga.
ul.prepend(li);
// if we want both to happen then we can clone the nodes

//
console.log("");

//
const lii = document.createElement("li");
lii.textContent = "nayawala todo";
// const lii2 = lii.cloneNode();
const lii2 = lii.cloneNode(true);  // true means ki deep cloning hongi, child vegra sb, without true u can check, proper cloning nai hori hai. by using true it happens.
ul.append(lii);
ul.prepend(lii2);