//  'Nikita' -> 'Hi, Nikita'
const hiFunction = () => {
    let a = "Nikita"
    console.log(a + " -> HI," + a)
}

hiFunction();

// 5, 6 -> 11
 const sum = () => {
    //code here
    a = 5;
    b = 6;
    let c = a + b;
    console.log(a+" + "+b+" = "+c)
}

sum();

//5 -> false
//0 -> true
//4 -> true
 const isEven = () => {
    //code here
     let a = 16;
    if (a % 2 === 0 || a === 0){
        b = true
        console.log(b)
    } else {
        b = false
        console.log(b)
    }
}

isEven();

// 2 -> i have 2 apples
 const apples = () => {
    //code here
    let a = 2;
    if (a === 0 || a !== 1){
        console.log("you have " + a + " apples")
    }
    else {
        console.log("you have" + a + " apple")
    }
}
apples();
// 4 -> 16
 const getPower = () => {
    //code here
    let a = 4;
    console.log(Math.pow(a,2))
}
getPower();

module.exports = {
    hiFunction,
    sum,
    isEven,
    apples,
    getPower,
}