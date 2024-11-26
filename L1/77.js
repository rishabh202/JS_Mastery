"use strict";
//  getters and setters | Same TS

// we call methods like method.() but properties can directly be printed

class Bird{
    constructor(name, age){
          this.name = name;
          this.age = age;
    }

    eat(){
        return `${this.name} is eating`;
    }

}


const bird1 = new Bird("Peacock", 4);
console.log(bird1.eat());

// suppose want to use eat() method as a property.
// so we use get
console.log(bird1.eat);  // abhi toh function dega pura


class Birds{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    
    get eat(){
        return `${this.name} is eating`;
    }
    
}

const bird2 = new Birds("Peacock", 4);
console.log(bird2.eat);
console.log(bird1.eat()); // error

// ~ly setters 
// if we want change properties, like properties and not method, we can use setters

class Person{
    constructor(Fname, Lname, age){
        this.Fname = Fname;
        this.Lname = Lname;
        this.age = age;
    }
    
    get fullName(){
        return `${this.Fname} ${this.Lname}`;
    }

    setName(Fname, Lname){
        this.Fname = Fname; 
        this.Lname = Lname;
    }
    
    
}

const P1 = new Person("rishabh", "shukla", 5);
console.log(P1.Fname);
console.log(P1.Lname);
P1.setName("Rohan", "Das");
// we can also do like
P1.Fname = "rinku";
P1.Lname = "singh";
console.log(P1.Fname);
console.log(P1.Lname);

P1.fullName = "so soe";
console.log(P1);
console.log(P1.fullName);


// that why we have setters, to change this a property 
// setters reamaning 

