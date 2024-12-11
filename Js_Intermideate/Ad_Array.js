const layer1=['BTC','ETH','BNB','LTC']
const layer2=['POL','SOL','OP','ARB','LXP','MINT'];

//layer1.push(layer2);// not a correct approch

//console.log(layer1); //It hold array inside an array in the last index.

//concat --It can merge 2 array into a new array and don't hold any array 

const layer3=layer1.concat(layer2);

//console.log(layer3);

//Another way to merger 2 array is Spread oprator (...) 3dots

const layer4=[...layer1,...layer2]

//console.log(layer4);

//Array Flat() method it is  combine all arrays inside an array

const meme=['doge','dogs','pepe',['shiba','trump'],['goats',['baby_doge','lovely']]]

const meme1=meme.flat(4) //Here argument pass as upto how many depth array includes, 
                        //If u pass infinity then it is also giving all values

//console.log(meme1);

//console.log(...layer1,...meme); // it is combine only 1 depth 

//console.log(layer1.concat(meme)) //It can't concat

//Converting any data into Array

console.log(Array.isArray('Bitcoin'))//false

console.log(Array.from('doge')) // [ 'd', 'o', 'g', 'e' ] it create the string in to array

console.log(Array.from({name:'sol'}))//[]
/**this is not a valid iterable or array-like object, the Array.from() method will behave in the following way:
It will treat the object as an empty iterable, meaning that Array.from() won't be able to generate any elements from it.
The resulting array will be an empty array ([]), because the object does not have numeric indices or a length property that Array.from() can use. */

//correct way->
console.log(Object.keys({name:'pol'})) //[ 'name' ]
/** here we define the which element of object we want to create an array key or value */

const coin1='Ada'
const coin2='sui'
const coin3='aptos'

console.log(Array.of(coin1,coin2,coin3)); // it create 3 variable to an array