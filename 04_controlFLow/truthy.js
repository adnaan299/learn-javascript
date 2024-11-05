const userEmail = "h@gmail.com"

if(userEmail){
    console.log("got user email")
}else{
    console.log("dont have user email")
}
// falsy values
// false, 0, -0, BigInt 0n, "", null , undefined, NaN

// truthy vlaues
// "0"(0 inside string)
// 'false'(false inside string)
// " ", [], {}, function(){} => empty func

const ar = [];

if(ar){
    console.log("not empty")
}else{
    console.log("empty")
}

// output will be not empty because the empty array is considered as true

// to check array is empty or not there is a diff method

if(ar === 1){
    console.log("not empty")
}else{
    console.log("empty")
}

// op => empty

// check object is empty or not

const emptyObj = {}

console.log(Object.keys(emptyObj).length); // it give the keys in array

// if(Object.keys(emptyObj) === 0){
//     console.log("empty object")
// }else{
//     console.log("not empty obj")
// }

// op = > not empty obje

if(Object.keys(emptyObj).length === 0){
    console.log("empty object")
}else{
    console.log("not empty obj")
}

