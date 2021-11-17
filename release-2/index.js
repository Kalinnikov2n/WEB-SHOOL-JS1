// [1,5, 2], -1 -> [5, 2, 1]
// [1, 5, 2], 1 -> [1, 2, 5]

const sorting = (arr, num=1) => {
    let k
    if (num == 1) {
        for (let i=0; i<arr.length-1; i++)
        {
            if (arr[j] < arr[i]) {
                k = arr[i];
                arr[i] = arr[j]
                arr[j] = k
            }
        }
    }
    if (num == -1) {
        for (let i=0; i<arr.length-1; i++)
        {
            if (arr[j] > arr[i]) {
                k = arr[i];
                arr[i] = arr[j]
                arr[j] = k
            }
        }
    }
    return(arr)
}

// [{age: 15, height: 140}, {age: 14, height: 150}], age -> [{age: 14, height: 150}, {age: 15, height: 150}]
const deepSorting = (arr, par) => {
    let k;
    for (let i=0; i<arr.length-1; i++) {
        for (let j = i+1; j<arr.length; j++) {
            if (arr[j][par]<arr[i][par]) {
                k = arr[i];
                arr[i]=arr[j];
                arr[j]=k;
            }
        }
    }
    return (arr);
}


// ['d', 1, 3, null] -> [1, 3]
const getNumbers = (arr) => {
    for (let i=0; i<arr.length; i++) {
        if (typeof(arr[i]) != 'number') {
            arr.splice(i,1)
        }
    }
    return (arr);
}



// [1, 5, 34, -100] -> -100
const min = (arr) => {
    let minArr = arr[0]
    for (let i=0; i<arr.length; i++) {
        if (arr[i]<minArr) 
        minArr=arr[i]
    }
    return (minArr);
}


// [1, 1, 1, 3, 4, 2, 2] -> [1, 3, 4, 2]
const getSet = (arr) => {
    let newArr = []
    for (let i=0; i<arr.length; i++) {
            if (!newArr.includes(arr[i])) {
                newArr.push(arr[i])
            }
        }
        return (newArr)
}



// // [1, 1, 1, 3, 4, 2, 2, 2] -> [1, 2]
const findTheMostReapetedEls = (arr) => {
    let count = {}, maxCount = 0, result = []
    for (let a of arr) count[a]=0
    for (let a of arr) count[a]+=1
    for (let a of arr) if (count[a]>maxCount) maxCount=count[a]
    for (let b in count) if (count[b]===maxCount) result.push(b)
    return (result)
}


// ['[','[', ']', ']' ] -> true
// [']', '[', ']'] -> false
const stack = (arr) => {
    for(let i=0; i<arr.length-1; i++) {
        if(arr[i]==='[') {
            for (let j=i+1; j<arr.length; j++) {
                if(arr[j]===']') {
                arr[i]=0
                arr[j]=0
                break
                }
            }
        }
    }
    for(el of arr) if(el!=0) return false
    return true
}


// 'Hi, Nikita', 'Hi' -> true
const checkForBadWord = (str, word) => {
    return Boolean(str.indexOf(word) + 1)
    }

const customSome = (arr, func) => {
    for(el of arr) if(func(el)) return true
    return false
}

const customFind = (arr, func) => {
    for(el of arr) if(func(el)) return el
    return undefined
}

const customMap = (arr, func) => {
    let newArr = []
    for (el of arr) newArr.push(func(el))
    return newArr
}

const customReducer = (arr, func) => {
    for(i=0; i<arr.length-1; i++)
    arr[i+1] = arr[i+1].func(arr[i])
    return arr[arr.length-1]
}

const customFilter = (arr, func) => {
    let newArr = []
    for(el of arr) if(func(el)) newArr.push(el)
    return newArr
}