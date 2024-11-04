// {} => scopes
//var c = 300;
let a = 330;
if(true){
    let a = 10
    const b = 20
    var c = 30

    console.log("inner: " ,a );
    // c = 30 same as above statement
}
console.log("outer: " , a)
// console.log(a) => not available outside scope good
//console.log(b) => not available outside scope good
console.log(c)

//VIMP => the global scope in browser console and using node is different

function one(){
    const username = "hitesh"

    function two(){
        const website = "youtuve"
        console.log(username)
    }
    // console.log(website);

    two()
}

one()

if(true){
    const username = "hites"
    if(username === "hites"){
        const website = "yt"
        console.log(website + username);
    }
    // console.log(website) => error
}

//console.log(username) => error


// ___________________INTERESTING_______________

addone(4) // no problem
function addone(num){
    return num + 1;
}
addone(5);

//addTwo(5)//error because it is stored in variable
const addTwo = function(num){
    return num + 2;
}

addTwo(5)
