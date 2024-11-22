"use strict";
// object.assign 

// Clone objects using object.assign

const obj = {
    key1: 'value1',
    key2: 'value2'
}

const obj2 = obj;

// i.e agr hum ek me change kre toh dono me hoga since ek hi address pe dono object add hai.
obj.key3='value3';

console.log(obj);
console.log(obj2);
console.log(obj===obj2);

// aur aisa na ho islie hum clone krte hai, we know to clone using ... spread operator
const obj3 = {...obj};
obj.key4='value4';
console.log(obj);
console.log(obj3);


// another method to clone is object.assign 
const obj4 = Object.assign({}, obj)  // obj ka clone obj4 me bn jaaega. clone bnega (diff address obv)
console.log(obj4);
