const myObj = {
    js : "javascript",
    cpp : 'C++',
    rb : 'ruby',
}
// for in
// for (const key in object) {

// }

for(const key in myObj){
    console.log(`${key} is for ${myObj[key]}`)
}

// for in on array

const programming = ['e', '3', 'f', 'h']
for(const key in programming){
    console.log(key)
}

//we cannot use for in loop in map because it is not iteratable
