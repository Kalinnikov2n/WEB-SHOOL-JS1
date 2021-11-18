//  'Nikita' -> 'Hi, Nikita'
const hiFunction = (name) => {
    console.log("Hi,",name, "!");
}
hiFunction("Andrey");


// 5, 6 -> 11
 const sum = (a,b) => {
    console.log(a+b);
}
sum(5,6);


//5 -> false
//0 -> true
//4 -> true
const isEven = (num) => {
   console.log(Boolean(num%2==0))
}
isEven(4);


// 2 -> i have 2 apples
 const apples = (num) => {
    console.log("I have", num, "apples");
}
apples(10);

// 4 -> 16
const getPower = (num,multiplier) => {
    console.log(num**multiplier)
}
getPower(4,2);

module.exports = {
    hiFunction,
    sum,
    isEven,
    apples,
    getPower,
}
