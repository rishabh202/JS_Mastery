"use strict";
// super keyword

// objects are also called as instance
class Bird{
    constructor(name, age){
          this.name = name;
          this.age = age;
    }

    eat(){
        return `${this.name} is eating`;
    }

    isCute(){
        return this.age<=3;
    }

    isHuman(){
        return true;
    }
}

class eagle extends Bird{
     constructor(name, age, speed){
        super(name, age);
        this.speed = speed
     }

     run(){
        return `${this.name} can run at ${this.speed}mph`
     }
}

// If we want an extra property in eagle class
// super means parent class

const eagle1 = new eagle("eagleOne", 23, 1000);
console.log(eagle1);
console.log(eagle1.run());