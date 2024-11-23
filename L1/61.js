// some warnings | Recaps | 
// "use strict";

const user1 = {
   
    firstNam: 'Rishabh',
    age: 8,
    about: function(){
        console.log(this); // pbv window de raha hai
        console.log(this.firstNam, this.age);
    }
}

// user1.about();

const myFunc = user1.about;
myFunc(); // obv undef, since idhr this jo object hai, uske pass firstNam aur age ki property nai hai.
// so we can check what is this, 
// since this ki value tb malum pdti hai, jb hum function ko call krte hai

// below is the correct code
const myFunc2 = user1.about.bind(user1);
// now we can call myFunc2
myFunc2();

