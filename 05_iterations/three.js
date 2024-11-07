// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]
// for of
// for(const iterator of object){

// }

for(const num of arr){
    console.log(num);
}

const greetings = "hello world"
for(const greet of greetings){
    console.log(`Each char is ${greet}`)
}

// MAPS

const map = new Map()

map.set('IN', "India")
map.set('USA', "United states")
map.set('fr', "France")

console.log(map);

// for of on map

for(const key of map){
    console.log(key)
}
// op => [ 'IN', 'India' ]
// [ 'USA', 'United states' ]
// [ 'fr', 'France' ]

// interseting syntax for printing only key 
for(const [key] of map){
    console.log(key);
}

// for only printing value
for(const [key, value] of map){
    console.log(value);
}


// for of on object
const myObj = {
    'game1' : 'NFS',
    'game2' : 'GTA'
}

// for of not works on objects 


