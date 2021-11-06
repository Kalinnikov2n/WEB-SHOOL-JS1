//  'Nikita' -> 'Hi, Nikita'
var a="Nikita"
 const hiFunction = (name) => {
    return ('Hi,' + name)
}


// 5, 6 -> 11

var m = 5, n = 6
 const sum = (m, n) => {
    return (m+n)
}


//5 -> false
//0 -> true
//4 -> true
 const isEven = (num) => {
    return(Boolean(!(num % 2)))
}


// 2 -> i have 2 apples
 const apples = (num) => {
    return("i have " + num + " apples")
}

// 4 -> 16
 const getPower = (num) => {
    return(num*num)
}


module.exports = {
    hiFunction,
    sum,
    isEven,
    apples,
    getPower,
}
