// if statement
let temperature = 32;
if(temperature < 50){
    console.log("temp less than 50")
}else{
    console.log("temp greater than 50")
}

const isUserLoggedIN = true;

// conditional operators
// <, > , <=, >=, == , != , ===

const score = 200

if(score > 100){
    const power = "fly"
    console.log(`user power : ${power}`)
}

// console.log(`user power : ${power}`)

const balance = 1000;
// short hand notation
if(balance > 500) console.log("test");// only one line

// if else if

const userLoggedIn = true
const debitCard = true
const LoggedInFromGoogle = false
const LoggedInFromMail = true

if(LoggedInFromGoogle || LoggedInFromMail){
    console.log("fasjdl");
}

if(userLoggedIn && debitCard){
    console.log("allow to buy course")
}

// **** Nullish Coalescing Operator (??): null undefined

let val;
// val = 6 ?? 4;
// op => 6

val = null ?? 4;
// op => 4

val = undefined ?? 4;
// op => 4
 
val = null ?? 3 ?? 32
//op => 3
// console.log(val);

// terniary operator

// conditon ? true : false

const Ice = 1000;

Ice >= 900 ? console.log("more") : console.log("less")
