// first promise

const promiseOne = new Promise(function(resolve, reject){
    //Do an async task
    //Db calls, crytography, network
    setTimeout(function(){
        console.log('async task is completed')
        resolve() // this connects this promise with then
    }, 1000)
})

promiseOne.then(function(){  // then is directly related with the resolve
    console.log('Promise Consumed');
})

// second promise

new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Async Task 2");
        resolve()
    }, 1000)
}).then(function(){
    console.log('Async 2 resolved')
})

// third promise

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: 'chai' , email : 'chai@example.com'})
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user)
})


// promise four

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username: 'adnaan', password : 'adfg'})
        }else{
            reject('ERROR : Something went wrong')
        }
    }, 1000)
})

// promiseFour.then().catch() 

promiseFour
.then((user) => {
    console.log(user)
    return user.username
})
.then((username) => {
    console.log(username)
})
.catch(function(error){
    console.log(error)
})
.finally(() => console.log('The promise is either resolved or rejected'))


// promise five

const promiseFive = new Promise (function ( resolve, reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({username: 'Javascript', password : 'adfg'})
        }else{
            reject('ERROR :Js  went wrong')
        }
    }, 1000)
})

async function consumePromiseFive(){
    try {
        const response = await promiseFive
         console.log(response)
    } catch (error) {
        console.log(error)
    }
}

consumePromiseFive()

// async function getUsers(){
//     try{
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()
//         console.log(data);
//     }catch(error){
//         console.log("E: " , error)
//     }

// }

// getUsers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data) => console.log(data))
.catch((error) => console.log(error))
