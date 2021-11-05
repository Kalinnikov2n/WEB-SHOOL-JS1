// [1, 5, 2], -1 -> [5, 2, 1]
// [1, 5, 2], 1 -> [1, 2, 5]

const sorting = (arr, direction) => {
    for (let i = 0; i < arr.length; i++) {
        if (direction === 1) { 
            if (arr[i + 1] <= arr[i]) {
                let temp = arr[i]
                arr[i] = arr[i + 1]
                arr[i + 1] = temp
            }
        } else if (direction === -1) {
            if (arr[i + 1] >= arr[i]) {
                let temp = arr[i]
                arr[i] = arr[i + 1]
                arr[i + 1] = temp
            }
        } else {
            return 'Incorrect data was given'
        }
    }
    return arr
}

console.log(sorting([1, 5, 2], -1))
console.log(sorting([1, 5, 2], 1))
console.log(sorting([1, 5, 2], 0))

// [{age: 15, height: 140}, {age: 14, height: 150}], age -> [{age: 14, height: 150}, {age: 15, height: 150}]
const deepSorting = () => {
    //code here
}




// ['d', 1, 3, null] -> [1, 3]
const getNumbers = () => {
    //code here
}




// [1, 5, 34, -100] -> -100
const min = () => {
    //code here
}



// [1, 1, 1, 3, 4, 2, 2] -> [1, 3, 4, 2]
const getSet = () => {
    //code here
}



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