//  'Nikita' -> 'Hi, Nikita'
 const hiFunction = () => {
    let name = 'Nikita'
    return ('hi,' +name)
}
console.log(hiFunction())

// 5, 6 -> 11
 const sum = (a, b) => {
   a = 5
   b = 6
   return a + b
}
console.log(sum())


//5 -> false
//0 -> true
//4 -> true
 const isEven = (g) => 
    !(g % 2)
    console.info(isEven(5))
    console.info(isEven(0))
    console.info(isEven(4))

// 2 -> i have 2 apples
 const apples = (a) => {
    a = 2
    return (`i have ${a} apples`)
}
console.log(apples())


// 4 -> 16
 const getPower = (a) => {
    a = 4
    return Math.pow(a, 2)
}
console.log(getPower())

module.exports = {
    hiFunction,
    sum,
    isEven,
    apples,
    getPower,
}
