//  'Nikita' -> 'Hi, Nikita'
 const hiFunction = (a) => {
    console.log("Hi "+a);
}
// hiFunction("Danil")


// 5, 6 -> 11
 const sum = (x,y) => {
    console.log(x+y)
}
// sum(6,5)

//5 -> false
//0 -> true
//4 -> true
 const isEven = (x) => {
    if (x%2==0){
        console.log(true)
    } else{
        console.log(false)
    }
}
// isEven(4)

// 2 -> i have 2 apples
 const apples = (a) => {
    console.log("i have "+a+" apples")
}
// apples(3)

// 4 -> 16
 const getPower = (a) => {
    console.log(a*a);
}
// getPower(4)
module.exports = {
    hiFunction,
    sum,
    isEven,
    apples,
    getPower,
}
