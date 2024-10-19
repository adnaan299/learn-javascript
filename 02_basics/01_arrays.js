// array

const myArr = [0,1,2,3,4,5]
const myHeroes = ["shaktiman","ironman"]

console.log(myArr[2]);
console.log(myHeroes[1]);

// Array methods

myArr.push(67)
myArr.pop()

myArr.unshift(9) // it inserts the element from the beggining of the arr
myArr.shift() // removes the first element of the arr

console.log(myArr.includes(3));
console.log(myArr.indexOf(3));

const newArr = myArr.join() // it will join the array and also convert it into string

console.log(typeof myArr); // type => object
console.log(typeof newArr);  // type => string

// slice, splice

console.log("Value of my arr", myArr);

const myn1 = myArr.slice(1,3)
console.log("value stored in myn1",myn1);
console.log("Value of my arr after slice" , myArr)

const myn2 = myArr.splice(1,3)
console.log("value stored in myn2",myn2)
console.log("Value of my arr after splice", myArr)

// Diff between slice & splice

// => in 'slice' original array is not manipulated
// => in 'splice' original array is manipulated 
// the range is including the position of last element we are giving in the splice
// refer below example

// => EXAMPLE
// Value of my arr [ 0, 1, 2, 3, 4, 5 ]
// value stored in myn1 [ 1, 2 ]
// Value of my arr after slice [ 0, 1, 2, 3, 4, 5 ]
// value stored in myn2 [ 1, 2, 3 ]
// Value of my arr after splice [ 0, 4, 5 ]
