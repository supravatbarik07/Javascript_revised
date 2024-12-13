// Two Types of Memories In Js
/*
1. Stack Memory
Used For: Primitive data types like String, Number, Boolean, null, undefined, Symbol, and BigInt.
Behavior:
Stores the value directly.
When a variable is assigned to another, the value is copied.
Changes to one variable do not affect the other.
*/
let user = 'supravat'; // Stored in stack memory
let userCopy = user;   // A new copy of 'supravat' is created
userCopy = 'barik';    // Changes userCopy only
console.log(user);     // Output: 'supravat' (original value remains unchanged)
console.log(userCopy); // Output: 'barik' (changed value)
/**
 Why?
The userCopy variable holds its own copy of the value. Modifications to userCopy do not affect the original user.
 */

/*2. Heap Memory
Used For: Non-primitive data types like Object, Array, and Function.
Behavior:
Stores a reference to the value in memory.
When a variable is assigned to another, the reference (not the value) is copied.
Changes through one reference affect the original value since both variables point to the same memory location.
 */
let user01 = {               // Stored in heap memory
    email: 'supravat@gmail.com',
    ename: 'supravat'
};
let user02 = user01;         // user02 gets a reference to user01
user02.email = 'barik@123';  // Modifies the object through the reference
console.log(user02);         // Output: { email: 'barik@123', ename: 'supravat' }
console.log(user01);         // Output: { email: 'barik@123', ename: 'supravat' }

/**
 Why?
Both user01 and user02 refer to the same object in heap memory.
Modifying the object through one reference (user02) reflects in the other (user01).
 */




// //Stack memory example
// let user='supravat';
// let userCopy=user;

// userCopy='barik'
// console.log(user);

// console.log(userCopy);
// /* in above example user  variable is storing into the  stack memory, when it assign to the userCopy 
// varable it allocates only one copy of the user verable value. When userCopy is assigned by another 
// value, the changes only occurs in userCopy variable value and user variable value remain same no changes there.
// */

// //heap memory variable

// let user01={
//     email:'supravat@gmail.com',
//     ename:'supravat'
// }

// let user02=user01;
// user02.email='barik@123'
// console.log(user02);
// console.log(user01);

// /**
//  In the above example user01 variable is storing into heap memory,When it is assign to user02 variable
//  refrence of the usser01 is allocated. So when the user02 reassign a new value, the value is updated to
//  the main reference so user01 and user02 have same value after changes occours. So here user02 directly 
//  access the user01 value and make changes. In this case no copy of the value allocated.
//  */