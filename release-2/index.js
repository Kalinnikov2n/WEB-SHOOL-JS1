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
const getNumbers = (arr) => {
    for (let i = 0; i < arr.length; i++) 
    {
        if (typeof arr[i] !== "number")
          arr.splice(i, 1);
    }
    console.log(arr);
}
getNumbers(['d', 1, 3, null]);



// [1, 5, 34, -100] -> -100
const min = (arr) => {
    let min = arr[0];
    for(let i = 0; i < arr.length-1; i++)
        if (arr[i+1] < arr[i]) min = arr[i+1];
    console.log(min);
}
min([1, 5, 34, -100]);


// [1, 1, 1, 3, 4, 2, 2] -> [1, 3, 4, 2]
const getSet = (arr) => {
    let uniqueArray =  [...new Set(arr)];
    console.log(uniqueArray);
}
getSet([1, 1, 1, 3, 4, 2, 2]);


// // [1, 1, 1, 3, 4, 2, 2, 2] -> [1, 2]
const findTheMostReapetedEls = (arr) => {
    arr = arr.filter((item, index) => arr.indexOf(item) !== index)
    console.log([...new Set(arr)]);
}
findTheMostReapetedEls([1, 1, 1, 3, 4, 2, 2, 2]);


// ['[','[', ']', ']' ] -> true
// [']', '[', ']'] -> false
const stack = (arr) => {
    let countOpen = 0;
    let countClose = 0;
    arr.forEach( item => 
    {
        item === '[' && countOpen++
        item === ']' && countClose++    
    })
    console.log(Boolean(countOpen==countClose));
}
stack(['[','[', ']', ']' ]);
stack([']', '[', ']']);


// 'Hi, Nikita', 'Hi' -> true
const checkForBadWord = (string, keyword) => {
    console.log(Boolean(string.indexOf(keyword)!=-1));
}
checkForBadWord('Hi, Nikita', 'Hi');

const customSome = (condFunc, array) => {
    for(let i=0;i<array.length;i++)
        if(condFunc(array[i]))
            console.log(true);
        else 
            console.log(false);
}
//not debugged

const customFind = (condFunc, array) => 
{
    for(let i=0;i<array.length;i++)
        if(condFunc(array[i]))
            console.log(array[i]);
        else 
        console.log(undefined);
}
//not debugged


const customMap = (condFunc, array) => 
{
    let resultArray;
    for(let i=0;i<array.length;i++)
        resultArray.push(condFunc(array[i]));
    console.log(resultArray);
}
//not debugged

const customReducer = (condFunc, array) => {
    let result = array[i];
    for(let i=0;i<array.length;i++)
        condFunc(result,array[i]);
    console.log(condFunc);
}
//not debugged

const custonFilter = (condFunc, array) => {
    let newArray;
    for(let i=0;i<array.length;i++)
        if(condFunc(array[i]))
            newArray.push(array[i])
    console.log(newArray);
}
//not debugged