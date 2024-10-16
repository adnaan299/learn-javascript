// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

console.log("2" > 1);
console.log("02" > 1);

console.log(null > 0); // => false
console.log(null == 0); // => false
console.log(null >= 0); // => true
// The reason is that an (equality check ==) and comparisions (>, < ,>= , <=) works differently
// Comparisions convert null to a number , treating it as 0.
// That's why (12) null >= 0 is true and (10) null > 0 is false

// Strict check (===) => it checks the values & also it's datatype
console.log("12" == 12); // => true
console.log("12" === 12); // => false

