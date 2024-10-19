const name = "adnaan"
const repoCount = 50;

// console.log(name + repoCount + "value"); // => old way(not recommended)

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);  //string interpolation

const gameName = new String('hitesh-hc')
// here we are creating string as object in above syntax it is also processing
// string in this way but here we get various methods & funcitons through this 
// ex => length,toUpperCase()

console.log(gameName.length);
console.log(gameName.toUpperCase());// the original value is not changed because it is call by value

console.log(gameName.charAt(2));
console.log(gameName.indexOf('p'));

const newString = gameName.substring(0,4)// => last element is not included
console.log(newString);

const anotherString = gameName.slice(-8,4)
console.log(anotherString);

const newStringOne = "        hitesh      "
console.log(newStringOne);
console.log(newStringOne.trim());  // remove extra whitespaces

const url = "https:///adnaan.com/adnaan&20nasir"

console.log(url.replace('&20','-'));

console.log(url.includes('sundar')); // checks values is present inside the string or not

console.log(gameName.split('-')); // provide separator and it will divide the strings into arrays on the basis of separator ex = whitespace or -
