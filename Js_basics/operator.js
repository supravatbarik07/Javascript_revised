let text1='hy';
text1 += ' my name is supravat'

console.log(text1)
text1 += ' and your name pls'

console.log(text1)

let num=1
num +=1;
console.log(num)
num+=2
console.log(num)

let num1=7;
let num2='u';
let sum1=num1+num2;
console.log(sum1)
console.log(typeof(sum1)) //Note:- Number + string =returns string data type.

let num3=2;
//num3=9;
console.log(num3)
console.log(typeof(num3))
let num4='2'

console.log(num3===num4)//compair value and its data types
console.log(num3==num4) //Compair only values.

let num5=4;
let num6=++num5  //prefix increment. first increment then assign output will be the increament value
console.log(num5)
console.log(num6)


let x=5;
let y=x++; //Postfix increment. first assign then increment output will be the first assign value before increment
console.log(x);
console.log(y);
//Logical And assignment operator

let a=true;
let b= a &&= 34//If first value is true assign 2nd value will be assign
console.log(b)

let c=false;
let d= c &&=90;
console.log(d)

let e=1;
let f= e &&= 34
console.log(f)

let g=0;
let h= g &&=90;
console.log(h)

let i=undefined;
let j= i &&= 67;
console.log(j) 

let k=null;
let l= k &&= 89;
console.log(l)

//Logical or assignment operator
//if the first value is false then 2nd value will be assign.

let m=undefined;
let n=m ||= 89;
console.log(n)

//nulish closing assinment operator.
//If first value is null or undefiend 2nd value will be assign.
let o=8;
o ??= 10;

console.log(o)

let p=null;
let q=77;
p ??=q;
console.log(p)


//spread operator
let text2='356281' //split the numbers into individual
let text3=text2;
console.log(typeof(text3))
let min=Math.min(...text2);

console.log(min);

let aa='45'//'A'
let bb='34'//'U' //note: here strings are compire by there alphabetical order.
console.log(aa<bb)

