// reduce

const myNums = [1, 2, 3]

const myTotal = myNums.reduce((accumulator, currValue) =>{
    console.log(`acc: ${accumulator} and currvalue: ${currValue}`)
    return accumulator + currValue // implicit return
}, 0 )// initial value => 0

console.log(myTotal);

const shoppingCart = [
    {
        itemName : "js course",
        price : 1
    },
    {
        itemName : "c++ course",
        price : 1
    },
    {
        itemName : "PY course",
        price : 1
    }
]

const priceTopay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceTopay)
