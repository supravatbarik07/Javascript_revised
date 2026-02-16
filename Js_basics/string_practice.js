//memory in js 'Heap' and 'stack'

// //When you call a method on a primitive string:
// str.toUpperCase()
// JavaScript automatically does this internally:
// new String(str).toUpperCase()
// It temporarily wraps the primitive inside a String object,
// uses the method,
// then discards the object.
// This is called autoboxing.
// So even though 'jhon' is a primitive, it can use string methods.
let name=`supravat`
let name1=name;
name1='barik'
// console.log(name)
// console.log(name1);

let ename=new String('jhon')
let ename1=ename;//here before reassignment have same refence
ename1='TOM'//reassignment of variable so it is doesnot repesent same refrence now.
// console.log(ename1);
// console.log(ename);

// // console.log(String.fromCodePoint(1333,3987,0x67f77))

// console.log(ename.charAt(0))
// console.log(ename.charCodeAt(0));
// console.log(ename.length);
// // console.log(ename.charAt(ename.length-1));//outdated
// console.log(ename.at(-1));//use this isted of charAt()
// console.log(ename[2]);
// console.log(ename.concat(ename1));

// console.log(ename.toUpperCase());
// console.log(ename);

let pname='Hello Supravat'
let ch_size=pname.length;
console.log(ch_size)

console.log(pname.charAt(2))
console.log(pname.charCodeAt(0))
console.log(pname.codePointAt(0))
console.log(pname.at(-2));
console.log(pname[5]='y');

let lname='How are you'
console.log(pname.concat(' ',lname));

let cut=lname.slice(2,6)//
let cut1=lname.slice(4,2)//IF start > end, it returns an empty string
let cut2=lname.slice(3)
let cut3=lname.slice(-9)//It supports negative value
let cut4=lname.slice(-5,-4)

let cut5=lname.substring(-5)//It does not support negative value, -ve value treated as 0.
let cut6=lname.substring(4,9)
let cut7=lname.substring(9,4)//If start > end, it automatically swaps the values like end becomes start and start becomes end.

let cut8=lname.substr(2,7)//here second number does not specify the position its define the string length upto you want.
                          //it is removed from new version of js and its behavior same like SLICE.
console.log(cut8);
let yname='david WARNER'
console.log(yname.toUpperCase())//change to upper latter
console.log(yname.toLowerCase())//to change lower to upper

let zName='OMM Namah Shivay \u{1F64F}'
console.log(zName.isWellFormed())

console.log(zName.toWellFormed());

let cut9='  Jay shree Ram  '
console.log(cut9.trim());
console.log(cut9.trimStart());
console.log(cut9.trimEnd());

let text='7'//0007
console.log(text.padStart(4,'0x'))//here 1st argument is how many times add and 2nd argment is which value to be add -

console.log(text.padEnd(4,'5x'))//75x5

let text2='OMM Namah Shivay Shivay'
console.log(text2.repeat(12))
console.log(text2.replace('Shivay','BHAGABATE BASUDEBAYA'));//only replace first match
console.log(text2.replace(/SHIVAY/i,'Ganeshaya'))
console.log(text2.replace(/Shivay/g,'Bignesha'));
console.log(text2.replaceAll('Shivay','Mahadev'));//OR
console.log(text2.replaceAll(/Shivay/g,'Jhadeshar'));

let fruits='banana,apple,grapes,graves,jackfruits'

let fruitsArr=fruits.split(',');
console.log(fruitsArr);

fruits='';
for(let i=0;i<=fruitsArr.length-1;i++){
     fruits += fruitsArr[i] +'\n'
}
console.log(fruits)

let text3="let's take coffe for relax and take one somasa and take rest"
console.log(text3.indexOf('take',10));// Gives the index of the first 'take' in a sentence,
console.log(text3.lastIndexOf('take',50));//Gives the index of the last 'take' in a sentence

console.log(text3.search('take',56));
console.log(text3.search(/take/));

let text4='Its really pain if rain is raining 100% hole night today, all lands should be plain'

console.log(text4.match(/ain/g));
console.log(text4.match('ain'));
console.log(text4.match(/100%/gi));//for case sensitive

console.log(text4.matchAll('ain'))







