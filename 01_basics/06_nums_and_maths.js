const score = 200;
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2)); // O/p => 100.00

const otherNumber = 23.8966

console.log(otherNumber.toPrecision(3)); // priority is given to numbers before decimals 
// means whatever i am giving the precision it is starting from first value

const hundreds = 100000
console.log(hundreds.toLocaleString('en-IN')); 


//********************** Maths *********************

console.log(Math);
console.log(Math.abs(-4));// => convert to positive values
console.log(Math.round(4.5));
console.log(Math.ceil(4.1)); // for taking upper value
console.log(Math.floor(3.9));// for taking lower value
console.log(Math.min(3,32,54,35,5,6));
console.log(Math.max(3,32,54,35,5,6));


console.log(Math.random()); //=> its values all com between 0 & 1
console.log((Math.random()*10) + 1);

const min = 10
const max = 20

// VERY IMPORTANT FORMULA

let randomValue = Math.floor(Math.random() * (max - min + 1)) + min
console.log(randomValue);



