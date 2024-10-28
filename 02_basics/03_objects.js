// two ways of declaring an object
// literal , constructor

// when we declare obj with literal => it is not singleton
//  ''   ''   ''    ''   ''  constructor => it is singleton(always)
// Object.create(constructor)

//object literals
const JsUser = {
    name:"adnaan",
    "full name":"adnaan nasir",
    age:"18",
    location: "Ranchi",
    email: "adnaan@test.com",
    isLoggedIn: false,
    lastLoginDays:["monday","Saturday"]
}

// two way to access elements stored in objects
console.log(JsUser.email); // 1
console.log(JsUser["email"]);  // 2

// the question is how you will access full name?

console.log(JsUser["full name"]);

// how you will declare a symbol and use it in object and access that symbol

const mySym = Symbol("key")
const js = {
    name : "adnana",
    mySym : "man"
}
// if we will directly use sym in object its datatype will be string 
console.log(`symbol value is ${js.mySym} & type is ${typeof js.mySym}`);
// symbol value is man & type is string

const mySym1 = Symbol("key")
const js1 = {
    name : "adnanaafsd",
    [mySym1] : "manfs"
    
}
console.log(js1); // { name: 'adnanaafsd', [Symbol(key)]: 'manfs' }

console.log(js1[mySym1]); // correct syntax for using symbol

JsUser.email = "adnaan@abc.com" // to update the value of the obj using key
// Object.freeze(JsUser);  // to lock the object
JsUser.email = "adnaan@xyz.com"
console.log(JsUser)

JsUser.greeting = function(){
    console.log("hello user");
}

JsUser.greeting2 = function(){
    console.log(`hello user ${this["full name"]}`);
}

JsUser.greeting();
JsUser.greeting2();
// console.log(JsUser);
