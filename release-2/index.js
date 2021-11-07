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
    let count_arr = [];
    let final_arr = [];
    for(let i=0; i<arr.length; i++) count_arr.push(0);
    for(let i=0; i<arr.length; i++) count_arr[arr[i]]++;
    let max_el = getMaxOfArray(count_arr);

    
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