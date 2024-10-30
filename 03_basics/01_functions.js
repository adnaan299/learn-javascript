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
