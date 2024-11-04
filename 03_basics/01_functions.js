function sayMyName(){
    console.log("hello Adnaan");
}

sayMyName()

// sayMyName => reference
// sayMyName() => execution

function add(number1 , number2){
    console.log(number1 + number2);
}

// function add(number1 , number2) here number1 , number2 are parameters

add(3,4) // 7
// add(3,4) here (3,4) are arguments
add(3, 'a') // 3a

//  Begginer's Mistake
const result = add(3,5)
console.log("Result :", result);
// 8
// Result : undefined

// here the value is not stored in result
// because our fn is not returning any value 
// it is just printing the value


// function addTwo(num1, num2){
//     let result = num1 + num2;
//     return result
// }

// OR
 
function addTwo(num1, num2){
    return num1 + num2
}

const value = addTwo(3,6)
console.log("value : " ,value);

// after returning value from the function
// the next line after that is unreachable

// for example
// function addTwo(num1, num2){
//     let result = num1 + num2;
//     return result
//     let reult = num1 * num2;
//     return result
// }

function loginMessage(username){
    return `${username} just logged in`
}

// let value3 = loginMessage("adnaan")
// console.log(value3);

// Or

console.log(loginMessage("adnaan"));

// what if we dont pass any argument to the function
 console.log(loginMessage());
//  undefined just logged in
//  op = > it gives undefined because we have not defined the argument

// username === undefined or !undefined
function loginMessage(username){
    if(!username){
        console.log("kuch toh enter kar bawa")
        return
    }
    return `${username} just logged in`
}

console.log(loginMessage());


// ... rest operator
function calculateCartPrice(val1, val2, ...num1){
    return num1;
}

console.log(calculateCartPrice(200, 400, 500));

const user = {
    username:"hites",
    price: 199
}

function handleObject(anyobject){
     console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)
}

// handleObject(user)
// passing object directly
handleObject({
    username:"adnaan nasir",
    price:443232332
})

const myNewArray = [200, 100, 111, 333]

function returnArray(getArray){
    return getArray[1]
}

console.log(returnArray(myNewArray));

console.log(returnArray([1,4,5,6,7,7]))
