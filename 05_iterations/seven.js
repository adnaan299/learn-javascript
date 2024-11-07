 const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//  chaining
 const newNums = myNumbers
                    .map((num) => num * 10)
                    .map((num) => num + 2)
                    .filter((nums) => nums >= 40)

 console.log(newNums)