//video 21
//Two types of scopes in js one is Global scope another one is local scope

//Global scope ex;- if you declare variable outside the function the variable will be global variable and it can be used inside the function

const a=10;
let b=20;
var c=30;
if(true){
    console.log(a, b,c); //here a,b,c declared as the global scope  //10 20 30
}

//Local scope:- If You declare variable inside the function the variable scope will be local couldn't use as global variable

if(1>0){
    let x=2//x cann't use as global variable bcz let keyword is bloack scopped
    var y=3//Can be used as block scopped, which is giving complexity in your code, so avoid it to use
    const z=4//y cann't use as global variable bcz const keyword is bloack scopped
}
//console.log(x,z) //throughing error except var keyword
console.log(y)// no error

const p=201
let q=306
var r=35

if(6!=5){
    const p=206
    let q=305
    var r=37
}
console.log(p)//return only global scope value  201
console.log(q)//return only global scope value  306
console.log(r)//value will be replaced by local scope value.  37
