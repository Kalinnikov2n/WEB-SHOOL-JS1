//  'Nikita' -> 'Hi, Nikita'
const hiFunction = (name) => {
    console.log("Hi", name)
}


// 5, 6 -> 11
 const sum = (a,b) => {
    console.log(a+b)
}


//5 -> false
//0 -> true
//4 -> true
 const isEven = (a) => {
    if (a%2 == 0) {
        console.log(true)
    }
    else{
        console.log(false)
    }
}


// 2 -> i have 2 apples
 const apples = (n) => {
    if (n!=1) {
        console.log("I have " + n + " apples")
    }
    else {
        console.log("I have " + n + " apple")
    }
}
// 4 -> 16
 const getPower = (n) => {
    console.log(n*n)
}

hiFunction("Anna")
sum(2,3)
isEven(4)
isEven(5)
apples(4)
apples(1)
getPower(5)

