// const age=20;
// console.log(age);

// const serialNo= new Number(34.4323);
// console.log(serialNo);

// console.log(serialNo.toFixed(2));
// /*
// ->If we want to print an number with out decimal and passing 2 it adding 2 zero after the decimal e.g 34.00
// ->if there is a number like 34.6790 and passing 2 as argument it rounding the decimal place value and giving 2 
// decimal value like 34.68.
// ->Mostly used in commercial website.
// */

// const number1= 346.256;
// console.log(number1.toPrecision(2));//giving expontial value i.e 3.5e+2
// console.log(number1.toPrecision(4));//Giving 3 digit before decimal and rounded one value after decimal i.e 346.3
// console.log(number1.toPrecision(3));// 346 no value after decimal

// const number2=10000000;
// console.log(number2.toLocaleString()); // 1,000,000 follows us standards

// console.log(number2.toLocaleString('en-IN')); // 1,00,00,000 follows indian standards

// const number3=356;
// console.log(number3.toString()); // convert number to string

// console.log(number3.valueOf());  //


////////////+++++++MATH+++++++++//////////////

console.log(Math);

// console.log(Math.abs(-8)); // returns +ve value i.e 8
// console.log(Math.round(8.6)); // 9
// console.log(Math.ceil(3.8)); // top value that is 4
// console.log(Math.floor(6.7)); //lower value i.e 6

/*Math.random()--> always giving value in between 0 to 1.
*/

console.log(Math.random());
console.log((Math.random()*10));//Shifting one number after decimal point to left side 0.1922.. -> result should be 1.9222
console.log((Math.random()*10)+1); // adding 1 with result for avoiding 0 result.

//For getting some range value using random method

const min=10;
const max=20;


console.log(Math.floor(Math.random() *(max-min+1))+ min)

//here in above it will give value in between 10 t0 20 every time 
//this is very use full for any range value getting
 
const min1=1;
const max1=6;

console.log(Math.floor(Math.random()*(max1-min1+1) +min1))