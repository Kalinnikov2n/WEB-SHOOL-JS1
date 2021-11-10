// [1,5, 2], -1 -> [5, 2, 1]
// [1, 5, 2], 1 -> [1, 2, 5]

const sorting = (arr,choose) => {
    arr = arr.sort();
    if (choose == 1) console.log(arr);
    if (choose == -1) console.log(arr.reverse());
}
sorting([1,5,2],-1);
sorting([1,5,2],1);

// [{age: 15, height: 140}, {age: 14, height: 150}], age -> [{age: 14, height: 150}, {age: 15, height: 150}]
const deepSorting = (array,keyword) => {
    let arrayLength = array.length;
    for(let i =0;i<arrayLength;i++)
        for(let j = 0; j < arrayLength-1; j++)
        {
            if(array[j][keyword] > array[j+1][keyword]){
                let temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
            }
        }
    console.log(array);
}
deepSorting([{age: 15, height: 140}, {age: 14, height: 150}], "age");
deepSorting([{age: 15, height: 140}, {age: 14, height: 150}], "height");



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