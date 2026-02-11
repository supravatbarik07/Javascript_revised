let x=45;
x=34;
console.log(x)

let num1=9
if(num1>10 && num1<50){
   console.log('Yes the number is lies between 10 and 50')
}
else{
    console.log('not lies btween 10 and 50')
}

let y=4;
let z=y++;
let t=z++;
console.log(y);//5
console.log(z);//5

if(true){
    console.log(t)
}

let user_login=true;
let login=(user_login) ? 'login sucessfull' : 'login denied'

console.log(login)

let num2=349;

if(num2>100){
    console.log('number is greater then 100')
}
else{
    console.log('number is not greater then 100')
}

if(num2%2===0){
    console.log('number is even')
}
else{
    console.log('number is odd')
}
// console.log(22/2)

let age =24
if(age>=18){
    console.log('You r eligible for voting')
}
else{
    console.log('You r not eligible for voting')
}

let isLogin=true;
let name='supravat'

if(isLogin){
    if(1>0)
    {
        console.log(`My name is ${name}`)
    }
}

let secured_mark=456;
if (secured_mark>250){
    console.log('you are passed');
}
else{
    console.log('Your are failed')
}

let num3=-45
if(num3<0){
    console.log('number is negative')
}
else if(num3>0){
    console.log('number is positive')
}
else{
    console.log('No is zero')
}

//using ternery operator

let result= num3 >0 ? 'number is Positive' : num3<0 ? 'number is negative' :'number is zero'
console.log(result)

let num4=79;
let num5=79;
let num6=79;

let largest= num4 >num5 ? `${num4} is a greater number` : `${num5} is greater`
console.log(largest)

//try among 3 numbers.

if(num4>num5 && num4>num6){
    console.log('num4 is greater no')
}
else if(num5>num6 && num5>num4){
    console.log('num5 is greater no')
}
else if(num6>num4 && num6>num5){
    console.log('num6 is greater no')
}
else{
    console.log('any of numbers are same')
}

let user_name='supravat'
// console.log(user_name.length)

if(user_name.length===0){
    console.log('The string is empty')
}
else{
    console.log(`the string is not empty ${user_name}`)
}

let login_status=false;
if(login_status){
    console.log('You are Logged in')
}
else{
    console.log('You are not logged in')
}

let num7=35;

let result1= num7%7===0 && num7%5===0 ? 'this number is devisible by 5 and 7' : 'This no is not devisible by 5 and 7'
console.log(result1)

let a=0;
console.log(a?'yes':'no')