//  'Nikita' -> 'Hi, Nikita'
 const hiFunction = (name) => {
    console.log("Hi!, " + name);
}


// 5, 6 -> 11
 const sum = (num1, num2) => {
    console.log(num1 + num2);
 }

//5 -> false
//0 -> true
//4 -> true
 const isEven = (num) => {
    num = num%2 === 0;
    console.log(num);
}


// 2 -> i have 2 apples
 const apples = (num) => {
    console.log("I have " + num + " apples"); 
}
// 4 -> 16
 const getPower = (num) => {
    console.log(num**2);
}

module.exports = {
    hiFunction,
    sum,
    isEven,
    apples,
    getPower,
}
    
