// 1) primitive 2)Non primitive

// *********************************
// Primitive 
// => call by value
// 7 types : String, Number, Boolean, null , undefined, Symbol,BigInt

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);
const bigNumber = 21332n // bigInt
// -------------------------------------
// JavaScript is dynamically typed, meaning that type checking happens during runtime, not compile time: 
// Dynamic typing
// In dynamically typed languages, type checks are performed while the program is running. 
// This means that a variable can hold different data types, even if they have the same name.
//  In JavaScript, you don't need to explicitly declare the data type of a variable


// ------------------------
// Reference (Non primitive)

// Array, Objects, Functions

// arrays
const heroes = ["shaktiman","ironman","thor"]

// objects
let myObject = {
    name:"adnaan",
    age :"23",
}
// functions
const myFunction = function(){
    console.log("Hello World")
}

console.log(typeof myFunction) // => function or object function

// typeOf documentation
// https://262.ecma-international.org/5.1/#sec-11.4.3


// ***********************************************
// Lecture 10
// Stack(used in primitive,change by value(copy of variable is provided)),
// Heap(used in non-primitive,change by reference(original value will be provided))

// call by value example
let myYoutubename = "hitesh"
let anotherName = myYoutubename
anotherName = "chai aur code"
console.log(myYoutubename);
console.log(anotherName);

// call by reference value
 let userOne = {
    email:"user1@gmail.com",
    upi:"user1@gmail.com"
 }
let userTwo = userOne
userTwo.email = "user2@gmail.com"
console.log(userOne.email);
console.log(userTwo.email);



