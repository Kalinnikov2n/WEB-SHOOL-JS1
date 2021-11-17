// [1,5, 2], -1 -> [5, 2, 1]
// [1, 5, 2], 1 -> [1, 2, 5]

const sorting = (arr, digit=1) => {
    let t
    if (digit == 1) {
        for(let i=0; i<arr.length()-1; i++) {
            for(let j=i+1; j<arr.length(); j++)
            {
                if (arr[j] < arr[i]) {
                    t = arr[i];
                    arr[i] = arr[j];
                    arr[j] = t;
                }
            }
        }
    }
    if (digit == -1) {
        for(let i=0; i<arr.length()-1; i++) {
            for(let j=i+1; j<arr.length(); j++)
            {
                if (arr[j] > arr[i]) {
                    t = arr[i];
                    arr[i] = arr[j];
                    arr[j] = t;
                }
            }
        }
    }
    return (arr);
}

// [{age: 15, height: 140}, {age: 14, height: 150}], age -> [{age: 14, height: 150}, {age: 15, height: 150}]
const deepSorting = (arr, par) => {
    let t;
    for(let i=0; i<arr.length-1; i++){
        for(let j=i+1; j<arr.length; j++) {
            if (arr[j][par]<arr[i][par]) {
                t=arr[i];
                arr[i]=arr[j];
                arr[j]=t;
            }
        }
    }
    return arr;
}




// ['d', 1, 3, null] -> [1, 3]
const getNumbers = (arr) => {
    let new_arr = [];
    for(let i=0; i<arr.length; i++) {
        let t = typeof arr[i];
        if(t == 'number')  
            new_arr.push(arr[i]);
    }
    return new_arr;
}




// [1, 5, 34, -100] -> -100
const min = (arr) => {
    let min_arr = arr[0];
    for (let i=0; i<arr.length; i++) {
        if(arr[i] < min_arr) min_arr = arr[i];
    }
    return min_arr;
}



// [1, 1, 1, 3, 4, 2, 2] -> [1, 3, 4, 2]

const getSet = (arr) => {
    let uniq_arr = []
    for(let el of arr) if(!uniq_arr.includes(el)) uniq_arr.push(el)
    return uniq_arr
}

const getSet2 = (arr) => { //Второй вариант решения (с использованием нашей функции sorting)
    let uniq_arr = [];
    arr = sorting(arr, 1);
    let t;
    for (let i=0; i<arr.length; i++) {
        if(arr[i] != t) {
            uniq_arr.push(arr[i]);
            t = arr[i];
        }
    }
    return uniq_arr;
}





// // [1, 1, 1, 3, 4, 2, 2, 2] -> [1, 2]
const findTheMostReapetedEls = (arr) => {
    let obj_counts = {}, max_count = 0, final_arr = []
        for (let el of arr) obj_counts[el] = 0
        for (let el of arr) obj_counts[el] += 1
        for (let el of arr) if (obj_counts[el]>max_count) max_count = obj_counts[el]
        for (let key in obj_counts) if (obj_counts[key]===max_count) final_arr.push(key)
        return final_arr
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
const checkForBadWord = (str, badword) => {
    return Boolean(str.indexOf(badword) + 1)
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
    let new_arr = []
    for (el of arr) new_arr.push(func(el))
    return new_arr
}

const customReducer = (arr, func) => {
    for(i=0; i<arr.length-1; i++)
        arr[i+1] = arr[i+1].func(arr[i])
    return arr[arr.length-1]
}

const customFilter = (arr, func) => {
    let new_arr = []
    for(el of arr) if(func(el)) new_arr.push(el)
    return new_arr
}