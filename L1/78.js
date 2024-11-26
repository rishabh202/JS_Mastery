"use strict";
// static methods and properties

class Birds{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    static classInfo(){
        return 'this is birds class'
    }

    static desc = 'this is static property'
    
    get eat(){
        return `${this.name} is eating`;
    }

    about(){
        return `users name is ${this.name} and age is ${this.age}`
    }
    
}

const bird1 = new Birds("eagle", 12);
// bird1.classInfo(); //error
console.log(bird1.about());
// that is class me method, u can call it like
let info = Birds.classInfo();
console.log(info);

// static method are used for like to have help to initialize an app or etc
// likewise we also have static properties
// class property hai, hence object pe access nai krskte, only on class.
console.log(bird1.desc);
console.log(Birds.desc)
