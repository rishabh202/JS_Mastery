"use strict";

// nested if else 
let winningNumber = 21; 
let userGuess = +prompt('Guess a number: ');  // NOTE; prompt always take values as a string, so whatever value you ask the user to put from prompt it will taken by defalut as a string. so lets change it to number by putting +
console.log(typeof userGuess, userGuess); 
if (userGuess===21) {
    console.log("Congratulations You have won!!!"); 
} else{
    if(userGuess > winningNumber){
        console.log('Ah bad luck, Your guess is too big'); 
    }
    else{
        console.log('Ah bad luck, Your guess is too short'); 
    }
}

// see if u put string in promt, js will still change it to number and typeof will give number and, it will be NaN, followed by error which is too short.
// we can write login to solve this problem.
// nested if-else means, if-else ke andar if else....