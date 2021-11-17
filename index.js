//  'Nikita' -> 'Hi, Nikita'
const hiFunction = (n) => {
    return 'Hi, ' + n;
 }
console.log (hiFunction ('Nikita'))



// 5, 6 -> 11
 const sum = (z, y) => {
    console.log(z + y);
}
sum (5, 6)

//5 -> false
//0 -> true
//4 -> true
 const isEven = (a) => {
    if (a % 2 == 0)
    console.log ('true')
    else if (a === 0)
    console.log('true');
    else 
    console.log('false');
}

isEven (4)


// 2 -> i have 2 apples
 const apples = (z) => {
    console.log ('i have ' + z + ' apples')
}

apples (2)


// 4 -> 16
 const getPower = (z) => {
    console.log (z*z)
}
getPower (4)

module.exports = {
    hiFunction,
    sum,
    isEven,
    apples,
    getPower,
}
