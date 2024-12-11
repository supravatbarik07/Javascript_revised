/*https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array */
//Array

const arr1=[1,2,34,32,56,89]// In js array we can declare any kind of data type values.Js array index starts from 0 index'

// console.log(arr1);  //[ 1, 2, 34, 32, 56, 89, 'supravat' ]
// console.log(arr1[3]);//32 accessing array value using index number.


const arr2=new Array('sam','cook','peter','thomas')

//console.log(arr2[2]);

/// Array Methods

// arr1.push(3) // Add element to the last index of array always
// console.log(arr1);
// arr1.pop()//Remove array elements from last index always 
// console.log(arr1);

// arr1.unshift(45); //add elements at 0 index always
// console.log(arr1);
// arr1.shift();// Remove element at 0 index
// console.log(arr1);

// console.log(arr1.indexOf(8));// retuns index of the passing value, if the value is not present then its returns -1

// console.log(arr1.at(2))// its returns index value of passing index
// //console.log(arr1.concat(arr2)); // concat 2 arrays
// console.log(arr1.copyWithin(2,0,2));  //[1,2,34,32,56,89]--->[ 1, 2, 1, 2, 56, 89 ]
/*
   copyWithin(target,start,end)
   explain:- target(R) -> The index at which to copy the elements
             starts(o) -> The index from which to start copying (inclusive). If not provided, it defaults to 0.
             end(o)  --> The index where to end copying (exclusive). If not provided, it defaults to the array's length.
 */

const arr3=arr1.join(); //It convert an array into a string,If we passing any delimeter as arument it will add after the elements  
//arr1.join(''); no space i.e 1234325689 ,arr1.join('k'); add k i.e 1k2k34k32k56k89
// console.log(arr1);
// console.log(arr3);
// console.log(typeof arr3);

console.log('A',arr1);
const sliceArr=arr1.slice(1,3)
console.log(sliceArr);
console.log('B',arr1); //original array remain same.


/**
 * ->SLICE->
 The main diffrence between slice and splice slice can't modify the original array 
 -"Slice" generally refers to extracting a portion of an array, string, or list 
 without modifying the original object. It doesn't alter the original structure, 
 and the result is a new copy of a part of the original array or string.
-The slice() method is used to return a shallow copy of a portion of an array, 
 starting from the specified start index and ending before the specified end index.
*/
 /*->SPLICE->
 -In case of splice it can modify the original array it can remove the splice element from original array .
 -Using splice we can remove and add new element to the array.
 -array.splice(start, deleteCount, item1, item2, ...)
 start: The index at which to begin changing the array.
 deleteCount: The number of elements to remove.
 item1, item2, ...: New elements to add to the array at the specified position.
 So the changes should be reflect in original array.
 */
 const spliceArr=arr1.splice(1,3) //remove elements
 console.log(spliceArr);
 console.log('C',arr1);
 const spliceArr1=arr2.splice(0,1,'smith')
 console.log(spliceArr1)//[ 'sam' ] -> its retuns only remove element array
 console.log('A',arr2);//[ 'smith', 'cook', 'peter', 'thomas' ] // changes shows in original array
/**
 * splice VS Slice
 * -----------------
 * Splice: Modify (add/remove/replace elements).
   Slice: Extract a portion (without modification).
 */