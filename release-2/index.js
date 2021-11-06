// [1, 5, 2], -1 -> [5, 2, 1]
// [1, 5, 2], 1 -> [1, 2, 5]

const sorting = (arr, direction) => {
    if (direction === -1) {
        return arr.sort().reverse()
    } else if (direction != (1 || -1)) {
        return 'Incorrect data was given'
    }
    return arr.sort()
}

console.log(sorting([1, 5, 2], -1))
console.log(sorting([1, 5, 2], 1))
console.log(sorting([1, 5, 2], 0))

// [{age: 15, height: 140}, {age: 14, height: 150}], age -> [{age: 14, height: 150}, {age: 15, height: 150}]
const deepSorting = (objArr, key) => {
    objArr.sort((from, to) => (from[key] > to[key] ? 1 : -1))
    return objArr
}

console.log(deepSorting([{age: 15, height: 140}, {age: 14, height: 150}], 'age'))

// ['d', 1, 3, null] -> [1, 3]
const getNumbers = (arr) => {
    let sortedArr = []
    for (let i = 0; i < arr.length; i++) {
        typeof(arr[i]) === 'number' ? sortedArr.push(arr[i]) : 0
    }
    return sortedArr
}

console.log(getNumbers(['dick', 1, 3, null]))

// [1, 5, 34, -100] -> -100
const min = (arr) => {
    arr.sort()
    return arr[0]
}

console.log(min([1, 5, 34, -100]))

// [1, 1, 1, 3, 4, 2, 2] -> [1, 3, 4, 2]
const getSet = (arr) => {
    return [...new Set(arr)]
}

console.log(getSet([1, 1, 1, 3, 4, 2, 2]))

// // [1, 1, 1, 3, 4, 2, 2, 2] -> [1, 2]
const findTheMostReapetedEls = () => {
    //code here
}


// ['[','[', ']', ']' ] -> true
// [']', '[', ']'] -> false
const stack = () => {
    //code here
}



// 'Hi, Nikita', 'Hi' -> true
const checkForBadWord = () => {
    //code here
}

const customSome = () => {
    //code here
}

const customFind = () => {
//code here
}

const customMap = () => {
    //code here
}

const customReducer = () => {
    //code here
}

const custonFilter = () => {
    //code here
}