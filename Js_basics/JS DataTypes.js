/**
 Primitive Data types(Call by value) 
 If you call primitive data types value will copy not memory refrence
 ->String,number,bigInt,null,undefiend,boolean,symbol

 NoN-premitive DataTypes(Call by refrence) here memory refrence also copy when you call them

 ->Array,Objects,functions
 */
 let bigNumber=2773891000n//bigINt
 let id=Symbol('456')
 let anotherId=Symbol('456')

 console.log(id === anotherId);//false

 //In Symbol datatypes if you passing same value to 2 diff variables, it's retuns false or values are not matching

 const heroArray=['Shaktiman','dodo','batman']

 const myObj={
    'name':'supravat',
    'age': 23
 }

 function add(){

 }
 //for all primitive datatypes returns object
 