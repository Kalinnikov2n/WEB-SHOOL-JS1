// [1,5, 2], -1 -> [5, 2, 1]
// [1, 5, 2], 1 -> [1, 2, 5]

const sorting = (a, n) => {
    let arr = a
    arr = arr.sort()
    if (n < 0) arr = arr.reverse()
    console.log(arr)


}
// sorting([1,4,3,8,7], -1)


// [{age: 15, height: 140}, {age: 14, height: 150}], age -> [{age: 14, height: 150}, {age: 15, height: 150}]
const deepSorting = (arr, atr) => {
    arr.sort((a, b) => (a.atr> b.atr) ? 1 : -1);
    arr.forEach(element => {console.log(element)
        
    });
    
    }
    // deepSorting([{age: 15, height: 140}, {age: 14, height: 150}], "age")




// ['d', 1, 3, null] -> [1, 3]
const getNumbers = (arr) => {
    let list = arr
    let a = list.filter(function(num){
        return typeof num == "number"
    })

    console.log(a)
}
// getNumbers(['d', 1, 3, null])




// [1, 5, 34, -100] -> -100
const min= function(a){
    let arr = a
    let min = arr[0]
    for (let i = 0;i<arr.length;i++){
        if (arr[i]<min){ min = arr[i]}
    }
    console.log(min)}
// min([1, 5, 34, -100])



// [1, 1, 1, 3, 4, 2, 2] -> [1, 3, 4, 2]
const getSet = (a) => {
    let answer = []
    for (let str of a){
        if (!answer.includes(str)) answer.push(str)
    }
    let array = a
    console.log(answer)
}
// getSet([1, 1, 1, 3, 4, 2, 2,0])



// // [1, 1, 1, 3, 4, 2, 2, 2] -> [1, 2]
const findTheMostReapetedEls = (a) => {
    let count = 0
    let max = 0
    let num = []
    for (let i = 0;i < a.length;i++){
        for (let j = 0; j < a.length;j++){
            if (a[i] == a[j]){
                ++count
            }
        }
        if (count > max){
            max = count;
            num = []
            num[0] = a[i]

        }
        if (count == max){
            a.push(a[i])
        }

    }
    console.log(num)
}
// findTheMostReapetedEls([1, 1, 1, 3, 4, 2, 2, 2]) ????????


// ['[','[', ']', ']' ] -> true
// [']', '[', ']'] -> false
const stack = () => {
    //code here
}



// 'Hi, Nikita', 'Hi' -> true
const checkForBadWord = (str, rw) => {
    b = " " + str
   if(b.indexOf(rw, 0) == -1){
       a = 0
   } else a = 1
    console.log(Boolean(a))
}
// checkForBadWord('Hi, Nikita', 'Hi')

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