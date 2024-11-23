"use strict";
// arrow functions 
// this inside arrow functions


const user1 = {
   
    firstNam: 'Rishabh',
    age: 8,
    about: () => {
        console.log(this); // obv window de raha hai
        console.log(this.firstNam, this.age);
    }
}

// see arrow functions ka khudka this nai hota, arrow function jo this leta hai, woh surroundings se leta hai, i.e ek level upar.
// and u cant change this arrow function ka this

// arrow functions ka this window object bhi ho sktay

user1.about(user1);
user1.about; // undef, as arrow function hai
