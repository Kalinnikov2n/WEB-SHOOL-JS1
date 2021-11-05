//  'Nikita' -> 'Hi, Nikita'
 const hiFunction = (name) => {
    return (`Hi, ${name}`)
}

console.log(hiFunction('Nikita'))

// 5, 6 -> 11
 const sum = (first_num, second_num) => {
    return first_num + second_num
}

console.log(sum(5, 6))

//5 -> false
//0 -> true
//4 -> true
 const isEven = (number) => {
    return number % 2 === 0
}

console.log(isEven(5))
console.log(isEven(0))
console.log(isEven(4))

// 2 -> i have 2 apples
 const apples = (number) => {
     if (number >= 2) {
         return `i have ${number} apples`
     } else {
         return `i have ${number} apple`
     }
}

console.log(apples(2))

// 4 -> 16
 const getPower = (number) => {
    return Math.pow(number, 2)
}

console.log(getPower(4))

module.exports = {
    hiFunction,
    sum,
    isEven,
    apples,
    getPower,
}
