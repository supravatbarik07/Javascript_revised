// const userName='supravat'
// let city='HYD'
// var number=9861781550;


// function display(){
//     let city='banalore';
//     console.log(city);
//     var number=7873311217;
//     console.log(number);
//     const userName='barik'
//     console.log(userName);
// }
// console.log(userName);
// display();

let x=2+3+'8' 
console.log(x)

let yy='6'+3+7 
console.log(yy)

// var h=90;
// var h=89;
// let p=78;
// // let p=90;
// const f=799;

// function sum(){
//     var h=90;
//     let p=88;
//     const f=8899;
// }
// sum();
// console.log(f);

let s=34;
console.log(s)
s=56;
console.log(s)//we can reassign the let variable but first must be redeclre with let key word.

let bike={
    'name':'speed 400',
    'price':'2.6l',
    'milllage':'35 kpl'
}
 bike={
    'name':'gurila',
    'price':'2.64L',
    'Millage':'30kpl'
 }   //This Is allowd bcz reassign with let keyword is allowed

 console.log(bike)

//const
const pi=3.41;
// pi=89;
console.log(pi)//its getting error becuase const
//  keyword should not be reassign

const cars=['audi','benz','swift','thar']
// cars=['bmw','aulto','seltos']
console.log(cars[2])//it also giving error becuse we
//  can not reassign const but we can change the values in const array.

cars[0]='jimmy'//we can change the value of the array.

console.log(cars)
// const newbike={
//     'name':'speed 400',
//     'price':'2.6l',
//     'milllage':'35 kpl'
// }
//  newbike={
//     'name':'gurila',
//     'price':'2.64L',
//     'Millage':'30kpl'
//  }
// //It giving error becuase we can not reassign 
// // the object with const keyword.


// console.log(newbike.name)

//Hoisted example
// book=67;
// let book=89 // let and const does not allow hoisted

let f=78;
// const f=98;
{
    const f=89;
}
//Redeclaring an existing var or let variable to const,
//  in the same scope, is not allowed:

const g=55;
// g=44;
{
    const g=77;
}
//Reassigning an existing const variable, 
// in the same scope, is not allowed:


//JS types

let y=null;
let b=Symbol()
let t=78;
let u=BigInt(7890);
let e=5644552e98
let w=true;
t=99;
console.log(typeof(t))
