// [1,5, 2], -1 -> [5, 2, 1]
// [1, 5, 2], 1 -> [1, 2, 5]


const sorting = (array, s) => {
    if (s===1) {
        array.sort ();
        console.log(array);
        }
    else if (s===-1) {
        array.sort ();
        array.reverse ();
        console.log(array);
    }
}

sorting ([1, 5, 2], -1)

// [{age: 15, height: 140}, {age: 14, height: 150}], age -> [{age: 14, height: 150}, {age: 15, height: 150}]

let obj1 = { age: 15, height: 140 }
let obj2 = { age: 14, height: 150 }

const deepSorting = (array) => {
    array.sort ((a, b) => a.age > b.age ? 1 : -1);
    console.log(array.sort () );
    };

deepSorting (
    [   {age: 15, height: 140}, 
        {age: 14, height: 150}  ]
    )

// ['d', 1, 3, null] -> [1, 3]
const getNumbers = (array) => {
    let result = array.filter (Number)
    console.log(result);
}

getNumbers (['d', 1, 3, null])


// [1, 5, 34, -100] -> -100
const min = (array) => {
    console.log(Math.min.apply (0, array));
}

min ([1, 5, 34, -100]);

// [1, 1, 1, 3, 4, 2, 2] -> [1, 3, 4, 2]
const getSet = (array) => {
    let result = new Set (array);
    console.log(result);
}

getSet ([1, 1, 1, 3, 4, 2, 2])

// // [1, 1, 1, 3, 4, 2, 2, 2] -> [1, 2]
const findTheMostReapetedEls = () => {
    //code here
}


// ['[','[', ']', ']' ] -> true
// [']', '[', ']'] -> false
const stack = (array) => {
    let stack = [array];
    for (let symbol of array) {
        if (symbol === '(') {
        stack.push (symbol) }
        else if (symbol === ')') {
            stack.pop(symbol)
            }
        }
    stack.isEmpty ? console.log(true) : console.log(false);;
    }
   

stack ([']', '[', ']'])

// 'Hi, Nikita', 'Hi' -> true
const checkForBadWord = (str, word) => {
    let result = str.match (word) 
    result === null ? console.log(false) : console.log(true);
}

checkForBadWord ('Nikita', 'Hi')

const customSome = () => {
    
}

const customFind = () => {
    
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