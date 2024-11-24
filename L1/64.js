"use strict";
// Factory Functions

const user1 = {
    firstName: "Rishabh",
    age: 19,
    email: "shuklarishabh618@gmail.com",
    address: "Kalher",
    about: function () {
        console.log(`Users name is ${this.firstName} and age is ${this.age}`)
    },
    is18: function () {
        return this.age >= 18;
    }
}
// suppose we want 1000000 of such users, obv we cant hard code it, that why we have factory functions

// create functions to create multiple objects
// A function which creates object | add key-value pair | returns object
function createUser(firstName, age, email, address) {
    const user = {};
    user.firstName = firstName;
    user.age = age;
    user.email = email;
    user.address = address;


    user.aboutUser = function () {
        console.log(`User name is ${this.firstName} and age is ${this.age}`)
    };
    user.is18 = function () {
        return this.age >= 18;
    };

    return user;

}

const userone = createUser("Rohan", 9, "123@gmail.com", "somewhere");
console.log(userone);
const is18 = userone.is18();
console.log(is18);
const about = userone.aboutUser(); // ye directly print hojaaega since ye method me humne consolelog krwaya hai, return krwana chaiye wese for better practice.
// console.log(about);