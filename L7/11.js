"use strict";
// event delegation

const grandparent = document.querySelector(".grandparent");

grandparent.addEventListener("click", () => {
    console.log("you clicked something")
});

// see phele capturing start hogi browser se, in our case there is not any capturing ,pr bubbling toh hai. (grandparent pe hai)
//so bubbling starts 
// i.e browser child pe aake check krega, kya parent pe bubbling hai, nai pr grandparent pe toh hai na. islie
// which means ki parent aur grandparent inke lie alg se eventlistener likhne ki jrurt nai hai, woh apne aap hojaega, just as we saw

// vimp see lec 2 from 7:46:00 (skipped)