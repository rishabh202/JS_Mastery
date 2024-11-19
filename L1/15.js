"use strict";
// if elseif else


// previous was nested if-else, this is if-elseif-else.

console.log("Hello world again");
let tempIndegree = 38; 
if (tempIndegree<0) {
    console.log("It is extremely cold outside"); 
} else if(tempIndegree<16){
    console.log("It is cold outside");
} else if (tempIndegree<27){
    console.log("It is a bit cold"); 
} else if (tempIndegree<35){
    console.log('It is normal weather outside'); 
} else if (tempIndegree<45){
    console.log('It is very hot outside');
} else {
   console.log('Its is extremely hot'); 
}
// can also do other way 
let temp_inDegree = 21; 
if (temp_inDegree>40){
    console.log("It is too hot"); 
} else if (temp_inDegree>30){
    console.log("It is warm outside");
} else if (temp_inDegree>20){
    console.log("It is normal outside"); 
} else if (temp_inDegree>10){
    console.log("It is cold outside");
} else {
    console.log("It is extremely cold outside");
}