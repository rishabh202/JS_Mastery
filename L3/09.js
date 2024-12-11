"use strict"
// loop

// Select multiple elements and loop through them

const lists = document.getElementsByClassName("lists")
console.log(lists);

// for loop, for of loop, forEach,
// but since forEach is an array method, so hence we cannot use ForEach to iterate through getElementsByClassName or query, bcz they return object. (array like objects)

// array like objects --> length property, indexing

for(let i=0; i<lists.length; i++){
    console.log(lists[i]);
}

// 
console.log("");
const tags = document.getElementsByTagName("a")
console.log(tags);

for(let i=0; i<lists.length; i++){
    const listItems = lists[i]
    listItems.style.backgroundColor = "#fff";
    listItems.style.color = "#000";
    listItems.style.fontWeight = "bold"; 
}



// for of
for (let list of lists){
    list.style.color = "#000";
    list.style.backgroundColor = "#fff";
}


// skipped the last part of this
// do this again