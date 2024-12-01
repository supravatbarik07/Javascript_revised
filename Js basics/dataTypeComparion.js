// console.log(null > 0);
// console.log(null < 0);
// console.log(null >= 0);
// console.log(null <= 0);

//Above If we compare null with 0 js convertrd null to 0 so it will compair with 0 with 0(or any other number with null).

// console.log(null == 0); But in case of '==' operator js can't convert the null to 0 so it returns false

//console.log(Number(null) ==0); // Here null returs 0 when converted to number so returns true

//console.log(null==Number(null)); // return false

/*
in case of undefined its return false for above all data type comparision 
*/

let a=20;
let b='20';

console.log(a===b);// '===' it compaire both value and datatype of the variable.  
console.log(a==b);// '=='  it does not compair the datatype only compaire the value.
