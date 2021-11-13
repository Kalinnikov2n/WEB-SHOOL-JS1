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
const findTheMostReapetedEls = (arr) => {
    let newArr = []
    arr.forEach((element, i) => {
        element === (arr[i + 1]) ? newArr.push(element) : 1
    });
    return [...new Set(newArr)]
}

console.log(findTheMostReapetedEls([1, 1, 1, 3, 4, 2, 2, 2]))

// ['[','[', ']', ']' ] -> true
// [']', '[', ']'] -> false
const stack = (arr) => {
    let countPlus = 0
    let countMinus = 0
    arr.forEach( element => {
        if (element === '[') {
            countPlus++
        } else if (element === ']') {
            countMinus++
        }
    })
    return countPlus === countMinus
}

console.log(stack(['[', '[', ']', ']']))
console.log(stack([']', '[', ']']))

// 'Hi, Nikita', 'Hi' -> true
const checkForBadWord = (str, word) => {
    return str.indexOf(word) !== -1
}

console.log(checkForBadWord('Hi, Nikita', 'Nikita'))

const customSome = (arr, cond) => {
    array.forEach(element => {
        if (cond(element)) {
            return true
        }
    });
    return false
}

const customFind = (arr, func) => {
    arr.forEach(element => {
        if (func(element)) {
            return element
        }
    })
    return undefined
}

const customMap = (arr, func) => {
    let newArr = []
    arr.forEach(element => {
        newArr.push(func(element))
    });
    return newArr
}

const customReducer = (arr, func, previousValue) => {
    let res = previousValue
    arr.forEach(element => {
        res = func(res, element)
    });
    return res
}

const customFilter = (arr, func) => {
    let newArr = []
    arr.forEach(element => {
        func(element) ? newArr.push(element) : 1
    });
    return newArr
}