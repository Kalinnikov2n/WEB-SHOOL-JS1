// [1,5, 2], -1 -> [5, 2, 1]
// [1, 5, 2], 1 -> [1, 2, 5]

const sorting = (arr, dir) => {
    arr = dir === 1 ? arr.sort().reverse():
    console.log(arr)
}


// [{age: 15, height: 140}, {age: 14, height: 150}], age -> [{age: 14, height: 150}, {age: 15, height: 150}]
const deepSorting = (arr, key) => {
    arr.sort((a, b) => (a[key] > b[key]) ? 1 : -1);
    console.log(arr)
}

// ['d', 1, 3, null] -> [1, 3]
const getNumbers = (arr) => {
    let newArr = [];
    arr.forEach(element => {
        typeof(element) === 'number' ? newArr.push(element) : element
    })
    console.log(newArr)
}


// [1, 5, 34, -100] -> -100
const min = (arr) => {
    console.log(MAth.min(...arr))
}


// [1, 1, 1, 3, 4, 2, 2] -> [1, 3, 4, 2]
const getSet = (arr) => {
    let newArr = [...new Set(arr)];
    console.log(newArr)
}



// // [1, 1, 1, 3, 4, 2, 2, 2] -> [1, 2]
const findTheMostReapetedEls = (arr) => {
    arr = arr.filter((element, index) => arr.indexOf(element) !== index)
    console.log([...new Set(arr)])
}


// ['[','[', ']', ']' ] -> true
// [']', '[', ']'] -> false
const stack = () => {
    //code here
}



// 'Hi, Nikita', 'Hi' -> true
const checkForBadWord = (str, word) => {
    if (str.indexOf(word) == -1){
        return false
    } else{
        return true
    }
}

const customSome = () => {
    //code here
}

const customFind = (arr, func) => {
    for (var i = 0; i < arr.length; i++){
        if (func(arr[i])){
            return arr[i]
        }
    }
    return undefined
}

const customMap = (func, arr) => {
    let newArr = [];
    arr.forEach(item => {
        newArr.push(func(item))
    })
    console.log(newArr)
}

const customReducer = (arr, func, prevValue) => {
    let result = prevValue;
    arr.forEach(item => {
        result = func(result, item)
    })
    console.log(result)
}

const customFilter = (arr, element) => {
    let newArr = [];
    arr.forEach(element => {
        typeof(element) === 'number' ? newArr.push(element) : element
    })
    console.log(newArr)
}