// [1,5, 2], -1 -> [5, 2, 1]
// [1, 5, 2], 1 -> [1, 2, 5]

export const sorting = (arr, mode) => {
    arr = mode === 1 ? arr.sort() : arr.sort().reverse()
    console.log(arr);
}

// [{age: 15, height: 140}, {age: 14, height: 150}], age -> [{age: 14, height: 150}, {age: 15, height: 150}]
export const deepSorting = (objArr, prop) => {
    objArr.sort((a, b) => (a[prop]> b[prop]) ? 1 : -1)
    console.log(objArr);
}




// ['d', 1, 3, null] -> [1, 3]
export const getNumbers = (arr) => {
    let newArr = [];
    arr.forEach( item => {
        typeof(item) === 'number' ? newArr.push(item) : item
    } )
    console.log(newArr);
}




// [1, 5, 34, -100] -> -100
export const min = () => {
    console.log(Math.min(...[1, 5, 34, -100]))
}



// [1, 1, 1, 3, 4, 2, 2] -> [1, 3, 4, 2]
export const getSet = (arr) => {
    console.log([...new Set(arr)]);
}



// // [1, 1, 1, 3, 4, 2, 2, 2] -> [1, 2]
export const findTheMostReapetedEls = (arr) => {
    arr = arr.filter((item, index) => arr.indexOf(item) !== index)
    console.log([...new Set(arr)]);
}


// ['[','[', ']', ']' ] -> true
// [']', '[', ']'] -> false
export const stack = () => {
    //code here
}



// 'Hi, Nikita', 'Hi' -> true
export const checkForBadWord = (str, badWord) => {
   console.log(str.toLowerCase().indexOf(badWord.toLowerCase()) !== -1);
}


export const customSome = () => {
    //code here
}

export const customFind = () => {
//code here
}

export const customMap = () => {
    //code here
}

export const customReducer = () => {
    //code here
}

export const custonFilter = () => {
    //code here
}