const tinderUser = new Object()

tinderUser.id = "123abc"
tinderUser.name = "sammy"
tinderUser.isLoggedIn = false

console.log(tinderUser);

// Objects inside object

const user = {
    email : "adnaannasir200@gmail.com",
    fullName : {
        first : {
            firstName : "adnaan"
        },
        last : {
            lastName : "nasir"
        }
     } 
}

console.log(user.fullName.first.firstName);

// combining objects

const obj1 = {1: 'a', 2 : 'b'}
const obj2 = {3: 'a', 4 : 'b'}
 
const obj3 = Object.assign( obj1, obj2);
console.log(obj3);

console.log(obj3 == obj1);  // op => true 

const obj4 = Object.assign({}, obj1 , obj2) // we use this syntax very rarely because we will use spread
console.log(obj4 == obj1) // op  => false

// jo pehla object rhega usi me agle sare copy ho jyge 

//  using spread in objects

const obj5 = {...obj1, ...obj2}; // mostly used
console.log(obj5);

console.log(tinderUser);

console.log(Object.keys(tinderUser));
// OP => [ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(tinderUser));
// OP => [ '123abc', 'sammy', false ]
console.log(Object.entries(tinderUser));
// OP => [ [ 'id', '123abc' ], [ 'name', 'sammy' ], [ 'isLoggedIn', false ] ]
// outputs are in arrays datatype

console.log(tinderUser.hasOwnProperty('isLoggedIn'))  // returns boolean values


// Object de-structure and JSON API intro 
const course = {
    coursename : "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// ways to extract values from object

// normal way
// console.log(course.courseInstructor);

// better syntax

const {courseInstructor}  = course

// we can also give another names 

const {courseInstructor : teacher} = course

console.log(courseInstructor);
console.log(teacher);


//  json api intro

// it is considered as api
// {
//     "name":"hitesh",
//     "cousename" : "js in hindi" ,
//     "price" : "free"
// }

// javascript object notation
[
    {},
    {},
    {}
]
