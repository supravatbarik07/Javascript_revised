//Single ton
//The object which is created using constructor

//Object literals
const PhNo=Symbol
const user={
    name:'supravat',
    age:24,
    email:'supravat12@gmail.com',
    isLoggedIn:false,
    [PhNo]:'9861781550',
    //PhNo:'1111111100', wrong way to declare the symbol it returns a string 
    'Department name':'Dev',
    lastLoggedIn:["Monday",'tuesday','wednesday','saturday']
}
/*Objects are created using key value pairs'key:value'.
In Js object keys  by default data types is String.
Here if  use Symbol data type based key, then first need to define the symbol key outside of the the object.
otherwise it gives run time error.

'Department name' -> this is most use when u are using combination of words for key.
*/
//ways of accessing object

// console.log(user.age)
// console.log(user[PhNo]);//recomanded this symbol type key can't access through '.' notations user.[PhNo]-> not allowed
// console.log(user["Department name"])//can't access through '.' when your key is combination of words.
// console.log(user['email']);// so when we use any key using squre braces must declare as string, as key is always string

//object manipulation
// user.email='bariksupravat@gmail'  //modified the value of email 
// console.log(user);
// Object.freeze(user);// using freeze() can't modified the object, it makes the object immutable
// user.name='papu'
//console.log(user);

user.address='bbsr' //added a new key 
 
//Functions inside objects

user.fullName=function(){
    console.log(`your name is ${this.name} barik`)//when you want to refrence same object then used this
    }

    console.log(user.fullName());
    
    //console.log(user)