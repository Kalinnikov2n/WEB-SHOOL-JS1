//  'Nikita' -> 'Hi, Nikita'
const hiFunction = (n) => {
    let name = (n);
    let b = ('Hi, ');
    let c = (b + name)
    console.log(c)
}
hiFunction("Sasha")



// 5, 6 -> 11
// alert("123")
const sum = (a, b) => {
    let first = a;
    let second = b;
let c = (first + second)
console.log(c)
}
sum(3, 7)


//5 -> false
//0 -> true
//4 -> true
const isEven = (n) => {
    console.log(Boolean(!(n%2)))
}
// isEven(2)
// isEven(3)
// isEven(7)


// 2 -> i have 2 apples
const apples = (n) => {
    console.log("i have ",n,"apples ")
}
// apples(100)
// 4 -> 16
const getPower = (n) => {
    //code here
    console.log(n**2)
}
// getPower(6)

// module.exports = {
//     hiFunction()
//     sum()
//     isEven(7)
//     apples(7)
//     getPower(7)
// }