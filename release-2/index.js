// [1,5, 2], -1 -> [5, 2, 1]
// [1, 5, 2], 1 -> [1, 2, 5]

const sorting = (mas,n) => {
    var k = mas.sort()
    if (n==1) {
        console.log(k)
    }
    else {
        console.log(k.reverse())
    }
}

sorting([2,1,4],1)

// [{age: 15, height: 140}, {age: 14, height: 150}], age -> [{age: 14, height: 150}, {age: 15, height: 150}]
const deepSorting = (mas, str) => {
    if (str == "age"){
        console.log(mas.sort((a,b) => a - b))
    }
    else {
        console.log(mas.sort((a,b) => b - a))
    }
}

deepSorting([{age: 15, height: 140}, {age: 14, height: 150}], "age")


// ['d', 1, 3, null] -> [1, 3]
const getNumbers = (mas) => {
    var k = mas.filter(item => typeof item === "number")
    console.log(k)
}

getNumbers(['d', 1, 3, null])


// [1, 5, 34, -100] -> -100
const min = (mas) => {
    mas = mas.sort()
    console.log(mas[0])
}

min([1, 5, 34, -100])


// [1, 1, 1, 3, 4, 2, 2] -> [1, 3, 4, 2]
const getSet = (mas) => {
    mas = mas.filter((item, index) => mas.indexOf(item) === index)
    console.log(mas)
}

getSet([1, 1, 1, 3, 4, 2, 2])



// // [1, 1, 1, 3, 4, 2, 2, 2] -> [1, 2]
const findTheMostReapetedEls = (mas) => {
    let arr = []
    let n
    let p = 0
    let maxi = 0
    var k = mas
    for (let j = 0; j < mas.length; j++ ){
        for (let i = 0; i < mas.length; i++ ){
            if (mas[i] == k[j]){
                n += 1
            }
        }
        if (n > maxi){
                maxi = n
        }
        n = 0
    }

    for (let j = 0; j < mas.length; j++ ){
        for (let i = 0; i < mas.length; i++ ){
            if (mas[i] == k[j]){
                n += 1
            }
        }
        if (n == maxi){
            arr.push(mas[j])
        }
            n = 0 
    }
    arr = arr.filter((item, index) => arr.indexOf(item) === index)
    console.log(arr)
}

findTheMostReapetedEls([1, 1, 1, 3, 4, 2, 2, 2])

// ['[','[', ']', ']' ] -> true
// [']', '[', ']'] -> false
const stack = (mas) => {
    if (mas.filter(x => x=="]").length == mas.filter(x => x=="[").length){
        console.log(true)
    }
    else {
        console.log(false)
    }
}

stack(['[','[', ']', ']' ])
stack([']', '[', ']'])

// 'Hi, Nikita', 'Hi' -> true
const checkForBadWord = (stroka,slovo) => {
    console.log(stroka.includes(slovo))
}
checkForBadWord("Hi Nikita", "Hi")

const customSome = (mas) => {
    let n = 0
    for (let i = 0; i < mas.length; i++ ){
        if (mas[i] % 2 == 0){
            console.log(true)
            n += 1
            break
        }
    if (n == 0){
        console.log(false)
    }
    }
}
customSome([1,2,1,1,1,1])

const customFind = (mas) => {
    for (let i = 0; i < mas.length; i++ ){
        if (mas[i] % 2 == 0){
            console.log(mas[i])
            break
        }
}
}
customFind([1,2,1,1,1,1])


const customMap = () => {
    //code here
}

const customReducer = () => {
    //code here
}

const custonFilter = () => {
    //code here
}