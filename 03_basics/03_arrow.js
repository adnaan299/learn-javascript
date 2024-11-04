const user = {
    username:"hitesh",
    price:999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to webiste`)
        console.log(this);
    }
}

// this keyword => refers to an object that is executing the current piece of code. 
// gives the current context

user.welcomeMessage()
user.username = "sam";
user.welcomeMessage()

console.log(this);
// op = empty object {}

function chai(){
    console.log(this)
}
//op function objects

chai()

function chailover(){
    let username = "hitesh"
    console.log(this.username)
}
//op => undefined
// the this keyword is only working inside objects

chailover()

const chai1 = () => {
    let username = "hiresh"
    console.log(this)
}

chai1() // still not working


// arrow function discussion

// const addTwo = (num1 , num2) =>{
//     return num1 + num2
// }

// *******Implicit return
// const addTwo = (num1, num2) => num1 + num2
const addTwo = (num1, num2) => (num1 + num2)
console.log(addTwo(4,6));

const myarray = [3,5,6,6,7]

//myarray.forEach(function user(){})
// myarray.forEach(() => ()) // implicit return
