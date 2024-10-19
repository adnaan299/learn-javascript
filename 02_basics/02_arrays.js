const marvel_heroes = ["thor", "Ironman", "spiderman"]
const dc_heroes = ["superman", "flash", "batman"]

// marvel_heroes.push(dc_heroes)
//bad practice -> creates a lot of problem
// it will push the entire array as a element in array 1
//[ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]

let newArr = marvel_heroes.concat(dc_heroes);
// it combines the elements of both arrays and store it in a new array

console.log(marvel_heroes);
console.log(newArr)
// output-> [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]

// spread operator
const all_new_heroes = [...marvel_heroes, ...dc_heroes]
//output -> same as concat but here we can take more than two values
// example =>
    //const parts = ["shoulders", "knees"];
    //const lyrics = ["head", ...parts, "and", "toes"];
    //  ["head", "shoulders", "knees", "and", "toes"]

console.log(all_new_heroes);

const arraysInsideArray = [1, 4, 4, 5, 6, 3, 6,[232,24,55,5,[523,5,6,3],3],[4,5,6]]

// how to make this array usable?
// => using flat prototype

//usable array
const usableArray = arraysInsideArray.flat(Infinity); // in fiat prototype we provide the depth
console.log(usableArray);

console.log(Array.isArray("adnaan")) // for checking is it array or not
// => false

console.log(Array.from("Adnaan")) // to convert it into array
// => [ 'A', 'd', 'n', 'a', 'a', 'n' ]

//  interesting for interview
console.log(Array.from({name:"adnaan"}))
// => give empty array []
// => it is not able to decide wether to take create arrays for keys or values 
// or if not able to create an array it will return empty array

// * Converting variables or we can say that elements into array

let score = 1;
let score1 = 2;
let score2 = 4;

console.log(Array.of(score1, score2, score))
// => [ 2, 4, 1 ]







