//  'Nikita' -> 'Hi, Nikita'
 const hiFunction = (name) => {
   return ("Hi," + name);
}


// 5, 6 -> 11
 const sum = (a, b) => {
    return (a+b);
}


//5 -> false
//0 -> true
//4 -> true
 const isEven = (number) => {
    return(Boolean(number % 2));
}


// 2 -> i have 2 apples
 const apples = (entity) => {
    return("i have " + " " + entity + " " + "apples")
}
// 4 -> 16
 const getPower = (number) => {
    return(number*number)
}

module.exports = {
    hiFunction,
    sum,
    isEven,
    apples,
    getPower,
}
