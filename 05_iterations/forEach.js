const coding = ["js", "ruby","java", "python", "cpp"]

// coding.forEach( function (item) {
// console.log(item);
// })

// coding.forEach(() => {
//     console.log(item);
// })

function printMe(item){
    console.log(item);
}

coding.forEach(printMe)

coding.forEach((item , index, arr)=>{
    console.log(item, index, arr);
})

const myCode =[
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "cplusplus",
        languageFileName: "c++"
    },
    {
        languageName: "python",
        languageFileName: "py"
    }
]

myCode.forEach((item) => {
    console.log(item.languageFileName)
})
