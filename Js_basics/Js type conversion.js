//*****************conversion*************** */
let score =undefined;
let age=20;
//console.log(score);
//console.log(typeof (score));

var typeChange=Number(score)
console.log(typeChange);
console.log(typeof (typeChange));

// var typeChange1=String(age);
// console.log(typeChange1);
// console.log(typeof (typeChange1));  
/**
 * conversion to string 
 * null==> null
 */
/*
->Conversion to number<-
'33' ==> 33
null ==> 0
'33kl' ==> Nan (But still datatype is number)
false  ==> Return value is 0 and incase of true return 1
undefined ==> nan
*/

let isLoggedIn ="sam";

var loggedInChanged=Boolean(isLoggedIn);
// console.log(loggedInChanged);
// console.log(typeof(loggedInChanged));

/*
->Type changed to Boolean<-
  1 ==> true
  0 ==> false
  "" ==> false
  "Sam" ==> true
 */

// ***********************Oprations****************

let value=20;

let negValue=-value
//console.log(negValue);

let a='hello'
let b=' Supravat'

//console.log(a+b);

// console.log('1'+2); 
// console.log(1+'2');
// console.log('1'+2+'3');
// console.log(1+2 +'8');

/*
in above if we do operation by adding a String with  number or viseversa in this case its prefer the
first value data type 
*/

console.log(+true);// result 1
console.log(+""); // return 0
// above practices are not recomanded

// let ab = 5;
// let bd = ++ab; // Increment ab first, then assign its value to b
// console.log(ab); // 6 (a is incremented)
// console.log(bd); // 6 (b gets the incremented value)
// let x = 5;
// let y = x++; // Assign x's value to y first, then increment x
// console.log(x); // 6 (x is incremented)
// console.log(y); // 5 (y gets the original value of x)
