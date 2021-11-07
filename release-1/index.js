//  'Nikita' -> 'Hi, Nikita'
 const hiFunction = (name) => {
    return "Hi, " + name
}


// 5, 6 -> 11
 const sum = (num1,num2) => {
    return num1+num2
}


//5 -> false
//0 -> true
//4 -> true
 const isEven = (num) => {
    if(num%2!==0){
        return false
    }else{
        return true
    }
}


// 2 -> i have 2 apples
 const apples = (appleCount) => {
    return "i have " + appleCount + " apples"
}
// 4 -> 16
 const getPower = (num) => {
    return Math.pow(num,2);
}

module.exports = {
    hiFunction,
    sum,
    isEven,
    apples,
    getPower,
}