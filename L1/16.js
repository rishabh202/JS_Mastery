"use strict";
// Switch Statement


let din = 6;
if (din===0){
    console.log("It is sunday");
}  else if (din===1){
    console.log("It is monday");
} else if (din===2){
    console.log("It is tuesday");
} else if (din===3){
    console.log("It is wednesday");
} else if (din===4){
    console.log("It is thursday");
} else if (din===5){
    console.log("It is friday");
} else if (din===6){
    console.log("It is saturday");
} else {
    console.log('Undefined')
}    // too lengthy, nd not a good practice. (this is if-elseif-else)


// Switch statement
// let day = 6; // saturday
// let day = 2; // tuesday
let day = 7;   // invalid obv

switch(day){
    case 0:
        console.log("Sunday"); 
        break; 
    case 1:
        console.log("Monday"); 
        break; 
    case 2:
        console.log("Tuesday"); 
        break; 
    case 3:
        console.log("Wednesday"); 
        break; 
    case 4:
        console.log("Thursday"); 
        break; 
    case 5:
        console.log("Friday"); 
        break; 
    case 6:
        console.log("Saturday"); 
        break; 
    default:
        console.log("Invalid Day"); 
}
