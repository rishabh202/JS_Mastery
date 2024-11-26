"use strict";
// class practice and extend keyword

// just like the extend keyword in TS 

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


const bird1 = new Bird("Peacock", 4);
console.log(bird1);
console.log(bird1.eat());
console.log(bird1.isCute());
console.log(bird1.isHuman());


class eagle extends Bird{

}

// just like TS, cz TS is JS. lol
const eagle1 = new eagle("Eagle1", 2);
console.log(eagle1);
console.log(eagle1.eat());
console.log(eagle1.isCute());
console.log(eagle1.isHuman());

// eagle class me bird ka constructor use hora hai, since ealge k pass apna constructor nai hai
