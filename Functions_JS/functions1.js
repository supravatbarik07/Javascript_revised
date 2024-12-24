//Functions in Js video-19

//DEf:- When we want to repeat one action multiple time use function

function name(){
    //console.log('supravat')
}
name()
//name() -> call the function for execution, 'name' it is refrence of the funtion, '()' execution of the function

function add(n1,n2){  //parameter
    //console.log(n1+n2);
}
add(2,3) //argument
/*
 parameter:- which value passed with the function defination
 argument:- which value passed when function call
 */

//Functions with returned keywords
//with return keyword value of a function is used by out side of the function

function addition(a1,a2){
    const result=a1+a2;
    return result;
    //return a1+a2; //you can use this approach also
    console.log('supravat'); // any thing after return statement will not be executable
}
const result =addition(2,4);
//console.log(result);

function userLoggedIn(username){
    if(!username){    //username === undefined   in js 'undefind' and 'empty string' returns false
        //console.log('Please pass an argument');
        return
    }
    return `${username} logged in`; 
}

const resultLoggedIN=userLoggedIn('');
//const resultLoggedIN1=userLoggedIn();//if no arguments are passing then it returns undefined 
//console.log(resultLoggedIN);

function userName(name='tom'){
    return name;
}
console.log(userName()) // here default parameter passed tom if argument will remain empty then it will return default.
console.log(userName('sam'));// here sam is override the default value.