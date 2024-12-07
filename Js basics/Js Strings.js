const name='supravat'
const lastName ='Barik'
// we can write string in 3 ways in js 1.'',2."", 3.``
// String Interipolation writting string with ``(back tick symbol)
console.log(`Hy this is ${name} ${lastName}`);

/*
In Js Can String declare with new keyword
String is a Object
Here String returns in key value pairs.
Run the bellow statement in browser console to see the property of the Strings.
String can not be an array.
Explore the all String functions with MDN refrence.
 */
const channelName= new String('Supravat');

console.log(channelName[0])//Returns 0 index value 'S'
console.log(channelName.__proto__);//See in browser for all prototype methods of String 

const checkName='Jhon'

console.log(checkName.substring(0,2));

const anotherName='Tiger'

console.log(anotherName.slice(0,2));

/**
 Here substring and slice both are a function of a String and both are working on same 
 funcunality but in Substring it does not allow -ve position no but slice() allows -ve position 
 number
 */