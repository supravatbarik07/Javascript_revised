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
let num6=++num5  //prefix increment. first increment then assign
console.log(num5)
console.log(num6)


let x=5;
let y=x++; //Postfix increment. first assign then increment
console.log(x);
console.log(y);
