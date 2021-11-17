// [1,5, 2], -1 -> [5, 2, 1]
// [1, 5, 2], 1 -> [1, 2, 5]
let x = [1, 5, 2, `1`];
x.pop()
const sorting = (num) => {
   num.sort()
   console.log(num)

}
sorting(x)




// [{age: 15, height: 140}, {age: 14, height: 150}], age -> [{age: 14, height: 150}, {age: 15, height: 150}]
 const deepSorting = (age) => {
    people[0] = {age: 14, height: 150}
    people[1] = {age: 15, height: 150}
    console.log(age)

}
let people=[]
people[0]={age: 15, height: 140}
people[1]={age: 14, height: 150}
deepSorting(people)






// ['d', 1, 3, null] -> [1, 3]
 const getNumbers = (arr) => {
    for (var i = 0; i <=arr.length; i++) {
        if (typeof arr[i] !== "number")
          arr.splice(i, 1);
      }
    console.log(arr)
}
let array = ['d', 1, 3, null]
getNumbers(array)


// [1, 5, 34, -100] -> -100
 const min = (arr) => {
   for (var i = 0; i <= arr.length; i++) {
       if(Array[i] < Array[0])
       Array[0] = Array[i]
   }
         console.log(Array[0])
}
let Array = [1, 5, 34, -100]
min(Array)



// [1, 1, 1, 3, 4, 2, 2] -> [1, 3, 4, 2]
 const getSet = (arr) => {
    const newSet = new Set(arr)

const backarr = [...newSet]
console.log(backarr)
}
let firstArray = [1, 1, 1, 3, 4, 2, 2, 2]
getSet(firstArray)


// // [1, 1, 1, 3, 4, 2, 2, 2] -> [1, 2]
const findTheMostReapetedEls = (arr) => {

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
const checkForBadWord = (str, name) => {
    return Boolean(str.indexOf(name) + 1)
    }



    let arr = [-9, -5, -60, 1]; //true - есть положительное число
    let customSome = arr.some(function(el) {
        if (el >= 0) {
            return true;
        } else {
            return false;
        }
    })
    



    let myArray = [8, -2, -5, -10, -34, - 48]; //поиск положительного числа
    let customFind = myArray.find(function (el) {
        return el > 0;
    })
    

    let names = ['Nikita', 'Max', 'Ann']; //поиск количества символов
    let customMap = names.map(function(name) {
      return name.length;
    })
    

    const numbers = [1, 2, 3]; //поиск среднего числа 
    const customReduce = numbers.reduce((total, amount, index, array) => {
      total += amount;
      if( index === array.length-1) { 
        return total/array.length;
      }else { 
        return total;
      }
    })
   

    let lastArray = [5, -5, 8, 300, 45, 4]; //фильтруем массив и оставляем числа < 10
    let customFilter = lastArray.filter(function checkNumber(currentValue) {
        return currentValue < 10;
      }
    )
    