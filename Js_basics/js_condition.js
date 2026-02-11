let a=14;
let text='You can not vote'

    // text='you can vote'

if(a>=18){
    text='you can vote'
}
 console.log(text)   

 //conditional ternary operator
 let br= (a<=18) ? 'minor' :'audult'
//It is a shorthand property of if else syntax: condition ? expression1 : expression2
 console.log(br)

let c=false;
let d= c? 0:0.2
console.log(d)


let b=1;

switch(b){
    case 0:
        console.log('sunday')
        break;
    case 1:
        console.log('monday')
        break;
    case 1:
        console.log('tuesday')
        break;
    case 3:
        console.log('wednesday')
        break;
    case 4:
        console.log('thrusday')
        break;
    case 5:
        console.log('friday')
        break;
    case 6:
        console.log('saturday')
        break; 
    default:
        console.log('out of range')                       
}

let gg=''
console.log(Boolean(gg)) //variable with value returns true
                         //Variable without value returns false.

// let hh=new Boolean(false)//we can create object using new keyword.  not required.                     
// console.log(typeof hh)