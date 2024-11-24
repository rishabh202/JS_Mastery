// short syntax
"use strict";

// till now we made functions like this
const user1 = {
   
    firstNam: 'Rishabh',
    age: 8,
    about: function() {
        console.log(this.firstNam, this.age);
    }
}
user1.about();

// so short syntax is ki instead of writing this key value pair, we can directly write it in the function.

const user2 = {
   
    firstNam: 'Rishabh',
    age: 8,
    about() {
        console.log(this.firstNam, this.age);
    }
}

// so like this we can define methods. This is short syntax.
user2.about();