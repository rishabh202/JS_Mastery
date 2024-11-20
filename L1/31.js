"use strict";
// objects destructuing 

const band = {
    bandnamee: "Cobra", 
    famousSongg: "ABCD", 
    year: 1969,
    anotherYear: 2000

}
// const bandnamee = band.bandnamee; 
// const famousSongg = band.famousSongg; 
  // This is dot notation
//   console.table(bandnamee, famousSongg);
  // now using destructuring 
  
  let {bandnamee, famousSongg} = band; 
  console.log(band);
  console.log(bandnamee); 
console.log(famousSongg); 
const {year:var_1, anotherYear:var_2, ...rests} = band; // the variable is named var_1 and etc
console.log(var_1, var_2); 
console.log(rests); 
console.log(typeof rests); // object and not array, like previously also
console.log(Array.isArray(rests));  // false
console.table(bandnamee, famousSongg);
