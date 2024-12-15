//Single ton objects ex

//const facebbokapp=new Object(); // return same as object leterals

const facebbokapp={};
facebbokapp.name='jhon'
facebbokapp.id=1
facebbokapp.isloggedin=false


//console.log(facebbokapp);

//You can declre empty object.

facebbokapp.username='sam';
facebbokapp.email='sam123@rediffmail.com'
//console.log(facebbokapp);

//Declare Object inside an object and access them
const sol=Symbol;
const cryptoApp={
    BTC:'103,000$',
    Eth:'3988$',
    Meme_coin:{
        Doge_catagory:{
            Doge:'0.4001$',
            Shiba:'0.000003'
        }
    },
    [sol]:'227$'
}

//console.log(cryptoApp.Meme_coin.Doge_catagory.Doge);//0.4001$, we can nested object as we want
// console.log(cryptoApp.Meme_coin);//{ Doge_catagory: { Doge: '0.4001$', Shiba: '0.000003' } } 

// console.log(cryptoApp.Meme_coin?.Doge_catagory.Doge);
/*
'?'->Optional chaining is particularly useful when working with data where some 
properties might not always be defined, avoiding runtime errors.
 */

//Combinging Objects.'

const obj1={1:'x',2:'y'}
const obj2={3:'x',4:'y'}
const obj3={5:'x',6:'y'}

// const obj4={obj1,obj2} //with this object can not split into one object
// console.log(obj4);

//const obj5=Object.assign({},obj1,obj2,obj3) 
//console.log(obj5);
/*
Object.assign() with this function can combine the objects into a single object.
so here which object is written first all values are assign to the first object.
so here using {}, a new object will created , It is optional but recomanded.
 */
//console.log(typeof obj1[1]);// to access a type of a key
//Using Spread operator(...)
// console.log('spread operator->');
// console.log({...obj1,...obj2})

// access Object inside and array

//In real time data come with array and inside array object pairs are present.

const user=[
    {
        id:1,
        name:'jhon'
    },
    {
        id:2,
        name:'tom'
    }
]

//console.log(user[1].id);// access throgh array ndex
 
//How to get all keys of an object

//console.log(Object.keys(facebbokapp));
//here its gives all keys details and its data type is array

//how to get all values of an object

//console.log(Object.values(facebbokapp));
////here its gives all values details and its data type is array

//console.log(Object.entries(facebbokapp));
// it gives all key value paires in array
/**
 [
  [ 'name', 'jhon' ],
  [ 'id', 1 ],
  [ 'isloggedin', false ],
  [ 'username', 'sam' ],
  [ 'email', 'sam123@rediffmail.com' ]
]
 */

//to check the property is present inside the object

console.log(facebbokapp.hasOwnProperty('isloggedin'));
