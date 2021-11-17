// //  'Nikita' -> 'Hi, Nikita'
// var a = "Nikita"

// const hiFunction = (name) => {
//     return ("Hi," + " " + name);
//  }

// var a = 77, b = 71
// const sum = (a, b) => {
//     return (a+b)
// }
// console.log(sum(a, b))

// const isEven = (number) => {
//     return(Boolean(!(number % 2)));
// }
// console.log(isEven(-5))
 
// 2 -> i have 2 apples

// const apples = (entity) => {
//     return("i have" + " " + entity + " " + "apples")
// }
// console.log(apples(111))

// // 4 -> 16
// const getPower = (number) => {
//     return(number*number)
// }
// console.log(getPower(5.5))

const sorting = (arr, digit=1) => {
    let t
    if (digit == 1) {
        for(let i=0; i<arr.length-1; i++) {
            for(let j=i+1; j<arr.length; j++)
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
        for(let i=0; i<arr.length-1; i++) {
            for(let j=i+1; j<arr.length; j++)
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
// console.log(sorting([1,5,-7,500, 436, 6787, 2, 7, 6.8, 6.9, -7.1], -1))

// [{age: 15, height: 140}, {age: 14, height: 150}], age -> [{age: 14, height: 150}, {age: 15, height: 150}]
// const deepSorting = (arr, par) => {
//     let t;
//     for(let i=0; i<arr.length-1; i++){
//         for(let j=i+1; j<arr.length; j++) {
//             if (arr[j][par]<arr[i][par]) {
//                 t=arr[i];
//                 arr[i]=arr[j];
//                 arr[j]=t;
//             }
//         }
//     }
//     return (arr);
// }
// console.log(deepSorting([{age: 15, height: 140}, {age: 14, height: 150}], 'age'))

// const deepSorting = (arr, par) => {
//     let t;
//     for(let i=0; i<arr.length-1; i++){
//         for(let j=i+1; j<arr.length; j++) {
//             if (arr[j][par]<arr[i][par]) {
//                 t=arr[i];
//                 arr[i]=arr[j];
//                 arr[j]=t;
//             }
//         }
//     }
//     return arr;
// }
// console.log(deepSorting([{age: 15, height: 140}, {age: 14, height: 150}], 'age'))

// ['d', 1, 3, null] -> [1, 3]
// const getNumbers = (arr) => {
//     let new_arr = [];
//     for(let i=0; i<arr.length; i++) {
//         let t = typeof arr[i];
//         if(t == 'number')  
//             new_arr.push(arr[i]);
//     }
//     return new_arr;
// }
// console.log(getNumbers(['d', 1, 3, '1', 1, null, undefined, 5, 6, 7])) 

// [1, 5, 34, -100] -> -100
// const min = (arr) => {
//     let min_arr = arr[0];
//     for (let i=0; i<arr.length; i++) {
//         if(arr[i] < min_arr) min_arr = arr[i];
//     }
//     return min_arr;
// }
// console.log(min([1, 5, 34, -100]))


// [1, 1, 1, 3, 4, 2, 2] -> [1, 3, 4, 2]
// const getSet = (arr) => {
//     let uniq_arr = [];
//     arr = sorting(arr, 1);
//     let t;
//     for (let i=0; i<arr.length; i++) {
//         if(arr[i] != t) {
//             uniq_arr.push(arr[i]);
//             t = arr[i];
//         }
//     }
//     return uniq_arr;
// }
// console.log(getSet([1, 1, 1, 3, 4, 2, 2]))

// const getSet1 = (arr) => {  !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//     let uniq_arr = [];
//     for(let i=0; i<arr.length; i++) uniq_arr.push(0);
//     for(let i=0; i<arr.length; i++) {
//         for(let j=0; j<uniq_arr.length; j++) {
//             if(arr[i] == uniq_arr[j]) break;
//             else {
//                 uniq_arr[j] = arr[i]; 
//                 break;
//             }
//         }
//     }
//     for(let i=0; i<uniq_arr.length; i++) 
//         if(uniq_arr[i] == 0) uniq_arr.splice(i, 1);
//     return uniq_arr;
// }
// console.log(getSet1([1, 1, 1, 3, 4, 2, 2]))

// arr = [1, 1, 1, 3, 4, 2, 2, 2];
// let count_arr = [];
// let final_arr = [];
// for(let i=0; i<arr.length; i++) count_arr.push(0);
// for (let i=0; i<arr.length; i++) count_arr[arr[i]]++;
// let max_el = count_arr[0];
// for(let i=0; i<count_arr.length; i++) if (count_arr[i] > max_el) max_el = count_arr[i]; 
// for(let i=0; i<count_arr.length; i++) if (count_arr[i] == max_el) final_arr.push(i)

// // // [1, 1, 1, 3, 4, 2, 2, 2] -> [1, 2]
// const findTheMostReapetedEls = (arr) => {
//     let count_arr = [];
//     let final_arr = [];
//     for(let i=0; i<arr.length; i++) count_arr.push(0);
//     for (let i=0; i<arr.length; i++) count_arr[arr[i]]++;
//     let max_el = count_arr[0];
//     for(let i=0; i<count_arr.length; i++) if (count_arr[i] > max_el) max_el = count_arr[i]; 
//     for(let i=0; i<count_arr.length; i++) if (count_arr[i] == max_el) final_arr.push(i);
//     return final_arr;
// }
// console.log(findTheMostReapetedEls([-3, -3, 5, 6, 7, 7, -4, -4]))

// 7 - > 13
// const fib = (n) => {
//     if(n===0) return 0
//     if(n===1) return 1
//     if(n<0) return ("The ordinal number of the Fibonacci number can't be negative! Pls, restart the program")

//     return fib(n-1) + fib(n-2)
// }
// console.log(fib(-1))

//'e3' -> ['d1', 'c2', 'c4', 'd5', 'f5', 'g4', 'g2', 'f1'] 

// const horseSteps = (pos) => {
//     let x
//     let y
//     let desk = [['a1', 'b1', 'c1', 'd1', 'e1', 'f1', 'g1', 'h1'],
//                 ['a2', 'b2', 'c2', 'd2', 'e2', 'f2', 'g2', 'h2'],
//                 ['a3', 'b3', 'c3', 'd3', 'e3', 'f3', 'g3', 'h3'],
//                 ['a4', 'b4', 'c4', 'd4', 'e4', 'f4', 'g4', 'h4'],
//                 ['a5', 'b5', 'c5', 'd5', 'e5', 'f5', 'g5', 'h5'],
//                 ['a6', 'b6', 'c6', 'd6', 'e6', 'f6', 'g6', 'h6'],
//                 ['a7', 'b7', 'c7', 'd7', 'e7', 'f7', 'g7', 'h7'],
//                 ['a8', 'b8', 'c8', 'd8', 'e8', 'f8', 'g8', 'h8']]
//     for(let i=0; i<desk.length; i++) {
//         for(let j=0; j<desk[i].length; j++) {
//             if(pos===desk[i][j]) {
//                 x = i
//                 y = j
//             }
//         }
//     }
    
//     if (x === 0 && y===0) return [desk[x+2][y+1], desk[x+1][y+2]]
//     else if (x === 0 && y===1) return [desk[x+2][y+1], desk[x+1][y+2], desk[x+2][y-1]]
//     else if (x === 1 && y===0) return [desk[x+2][y+1], desk[x+1][y+2], desk[x-1][y+2]]
//     else if (x === 1 && y===1) return [desk[x+2][y+1], desk[x+1][y+2], desk[x-1][y+2], desk[x+2][y-1]]

//     else if (x === 0 && y===7) return [desk[x+2][y-1], desk[x+1][y-2]]
//     else if (x === 0 && y===6) return [desk[x+2][y-1], desk[x+1][y-2], desk[x+2][y+1]]
//     else if (x === 1 && y===7) return [desk[x-1][y-2], desk[x+2][y-1], desk[x+1][y-2]]
//     else if (x === 1 && y===6) return [desk[x+2][y+1], desk[x+1][y-2], desk[x-1][y-2], desk[x+2][y-1]]

//     else if (x === 7 && y===0) return [desk[x-2][y+1], desk[x-1][y+2]]
//     else if (x === 7 && y===1) return [desk[x-2][y-1], desk[x-1][y+2], desk[x-2][y+1]]
//     else if (x === 6 && y===0) return [desk[x-1][y+2], desk[x-2][y+1], desk[x+1][y+2]]
//     else if (x === 6 && y===1) return [desk[x-2][y+1], desk[x+1][y+2], desk[x-1][y+2], desk[x-2][y-1]]

//     else if (x === 7 && y===7) return [desk[x-2][y-1], desk[x-1][y-2]]
//     else if (x === 7 && y===6) return [desk[x-2][y-1], desk[x-1][y-2], desk[x-2][y+1]]
//     else if (x === 6 && y===7) return [desk[x-1][y-2], desk[x-2][y-1], desk[x+1][y-2]]
//     else if (x === 6 && y===6) return [desk[x-2][y+1], desk[x+1][y-2], desk[x-1][y-2], desk[x-2][y-1]]

//     else if((x===2 || x===3 || x===4 || x===5)&&y===0) return [desk[x+2][y+1], desk[x+1][y+2], desk[x-1][y+2], desk[x-2][y+1]]
//     else if((x===2 || x===3 || x===4 || x===5)&&y===1) return [desk[x+2][y+1], desk[x+1][y+2], desk[x-1][y+2], desk[x-2][y+1],desk[x+2][y-1],desk[x-2][y-1]]

//     else if((x===2 || x===3 || x===4 || x===5)&&y===7) return [desk[x-1][y-2], desk[x+2][y-1], desk[x+1][y-2], desk[x-2][y-1]]
//     else if((x===2 || x===3 || x===4 || x===5)&&y===6) return [desk[x-1][y-2], desk[x+2][y-1], desk[x+1][y-2], desk[x-2][y-1],desk[x+2][y+1],desk[x-2][y+1]]

//     else if (x===0 && (y===2 || y===3 || y===4 || y===5)) return [desk[x+2][y-1], desk[x+2][y+1], desk[x+1][y-2], desk[x+1][y+2]]
//     else if (x===1 && (y===2 || y===3 || y===4 || y===5)) return [desk[x+2][y-1],desk[x+2][y+1],desk[x+1][y-2],desk[x+1][y+2],desk[x-1][y-2],desk[x-1][y+2]]

//     else if (x===7 && (y===2 || y===3 || y===4 || y===5)) return [desk[x-2][y-1], desk[x-2][y+1], desk[x-1][y-2], desk[x-1][y+2]]
//     else if (x===6 && (y===2 || y===3 || y===4 || y===5)) return [desk[x-2][y-1],desk[x-2][y+1],desk[x-1][y-2],desk[x-1][y+2],desk[x+1][y-2],desk[x+1][y+2]]

//     else return [desk[x-1][y-2], desk[x+1][y-2], desk[x-1][y+2], desk[x+1][y+2], desk[x-2][y-1], desk[x+2][y-1], desk[x-2][y+1], desk[x+2][y+1]]
// }

// console.log(horseSteps('g4'))

// const horseSteps1 = (pos) => {
//     let x
//     let y
//     let desk = [['a1', 'b1', 'c1', 'd1', 'e1', 'f1', 'g1', 'h1'],
//                 ['a2', 'b2', 'c2', 'd2', 'e2', 'f2', 'g2', 'h2'],
//                 ['a3', 'b3', 'c3', 'd3', 'e3', 'f3', 'g3', 'h3'],
//                 ['a4', 'b4', 'c4', 'd4', 'e4', 'f4', 'g4', 'h4'],
//                 ['a5', 'b5', 'c5', 'd5', 'e5', 'f5', 'g5', 'h5'],
//                 ['a6', 'b6', 'c6', 'd6', 'e6', 'f6', 'g6', 'h6'],
//                 ['a7', 'b7', 'c7', 'd7', 'e7', 'f7', 'g7', 'h7'],
//                 ['a8', 'b8', 'c8', 'd8', 'e8', 'f8', 'g8', 'h8']]
//     for(let i=0; i<desk.length; i++) {
//         for(let j=0; j<desk[i].length; j++) {
//             if(pos===desk[i][j]) {
//                 x = i
//                 y = j
//             }
//         }
//     }
//     return [desk[x-1][y-2], desk[x+1][y-2], desk[x-1][y+2], desk[x+1][y+2], desk[x-2][y-1], desk[x+2][y-1], desk[x-2][y+1], desk[x+2][y+1]]
// }
// console.log(horseSteps1('b3'))

// [1, 1, 1, 3, 4, 2, 2] -> [1, 3, 4, 2]

// const getSet = (arr) => {
//     let uniq_arr = []
//     for(let el of arr) if(!uniq_arr.includes(el)) uniq_arr.push(el)
//     return uniq_arr
// }
// console.log(getSet([1, 1, 1, 3, 4, 2, 2]))


// const findTheMostReapetedEls = (arr) => {
// let obj_counts = {}, max_count = 0, final_arr = []
//     for (let el of arr) obj_counts[el] = 0
//     for (let el of arr) obj_counts[el] += 1
//     for (let el of arr) if (obj_counts[el]>max_count) max_count = obj_counts[el]
//     for (let key in obj_counts) if (obj_counts[key]===max_count) final_arr.push(key)
//     return final_arr
// }
// console.log(findTheMostReapetedEls([-4, -4, 0, 1]))

// const checkForBadWord = (str,badword) => {
//     return Boolean(str.indexOf(badword) + 1)
// }
// console.log(checkForBadWord('Hi, Nikita', 'H'))

// ['[','[', ']', ']' ] -> true
// [']', '[', ']'] -> false
    // let arr = ['[','[', ']', ']' ] 
    // for(let i=0; i<arr.length-1; i++) {
    //     if(arr[i]==='[') {
    //         for (let j=i+1; j<arr.length; j++) {
    //             if(arr[j]===']') {
    //                 arr[i]=0
    //                 arr[j]=0
    //                 break
    //             }
                
    //         }
    //     }
    // }
    // let g = 0
    // for(el of arr)  {
    //     if(el!=0)  {
    //         console.log(false)
    //         break
    //     }
    //     g+=1
    // }
    // if (g===arr.length) console.log(true)

// const stack = (arr) => {
//     for(let i=0; i<arr.length-1; i++) {
//         if(arr[i]==='[') {
//             for (let j=i+1; j<arr.length; j++) {
//                 if(arr[j]===']') {
//                     arr[i]=0
//                     arr[j]=0
//                     break
//                 }
                    
//             }
//         }
//     }
//     for(el of arr) if(el!=0) return false
//     return true
// }
// console.log(stack([']', '[', ']']))

// const customSome = (arr, func) => {
//     for(el of arr) if(func(el)) return true
//     return false
    
// }
// console.log(customSome([1,21,3,4,5, 10], (elem => elem > 10)))

// const customFind = (arr, func) => {
//     for(el of arr) if(func(el)) return el
//     return undefined
// }
// console.log(customFind([1,2,3,11,5, 12], (elem => elem > 10)))

// const customMap = (arr, func) => {
//     let new_arr = []
//     for (el of arr) new_arr.push(func(el))
//     return new_arr
// }
// console.log(customMap([2,3,6,8,4,5], (elem => elem*elem)))

// const customReducer = (arr, func) => {
//     for(i=0; i<arr.length-1; i++)
//         arr[i+1] = arr[i+1].func(arr[i])
//     return arr[arr.length-1]
// }

// const customFilter = (arr, func) => {
//     let new_arr = []
//     for(el of arr) if(func(el)) new_arr.push(el)
//     return new_arr
// }
// console.log(customFilter([12, 5, 8, 130, 44], (elem => elem >= 10)))

// {name: 'Lim', surname: 'Bok', age: 12} -> 'Bok Lim'
// const fullName = (obj) => {
//     return(obj.surname+" "+obj.name)
// }
// console.log(fullName({name: 'Lim', surname: 'Bok', age: 12}))

// const checkForPropertyAndValue = (obj, key) => {
//     if(key in obj && obj[key]>0) return true
//     return false
// }
// console.log(checkForPropertyAndValue({key:-9}, 'key'))

// const createObjFromStr = (obj) => {
//     var a = eval('obj');
//     return a
// }
// console.log(typeof(createObjFromStr("{name: 'Vova', age: 12, type: 'owner'}")))

// const apples = (entity) => {
//     if (entity === 1) return ("i have" + " " + entity + " " + "apple")
//     else if (entity < 0) return ("entity < 0 ((( restart the program")
//     return("i have" + " " + entity + " " + "apples")
// }
// console.log(apples(10))

// let a = [1,2,3]
// console.log(a.indexOf(1))

// const calc = () => {
//     let a 
//     let op
//     return function (arg) { 
//     let operators = ['+', '-', '/', '*']
//     if (!(operators.indexOf(arg) + 1)) {
//             if (a === undefined) a = arg
//             else {
//                 if (op=='+') a+=arg
//                 if (op=='-') a-=arg
//                 if (op=='/') a/=arg
//                 if (op=='*') a*=arg
//             }
//             return a
//     }
//     else {
//         op = arg 
//         return ("Введите значение следующего аргумента выражения!")
//     }
// }
// }

// const myCalc = calc()
// myCalc(5)
// myCalc('+')
// myCalc(3)
// myCalc('/')
// console.log(myCalc(4))
// console.log(myCalc('*'))
// console.log(myCalc(-3))

// function a (name, surname) {
//     let arr = []
//     for (let i=0; i<arguments.length; i++) arr.push(arguments[i])
//     return arr
// }
// console.log(a('Denis', 'Morozov'))

// const useMemo = (func) => { // Рассмотрен случай, когда функция func, передаваемая в качестве аргумента ф-ции useMemo, получает на вход лишь один аргумент
//     let Res = {} // {arg:func(arg)}
//     let Args = []
//     return function () {
//             curArg = arguments[0]
//             for(let i=0; i<Args.length; i++)
//                 if(Args[i]===curArg) return (Res[curArg] + "!")
//             Args.push(curArg)
//             Res[curArg] = func(curArg)
//             return Res[curArg]
//             }
// }


// const cb = (num) => num + 1
// const func = useMemo(cb)
// console.log(func(1)) //cb вызовется и вернет резульат 2
// console.log(func(1)) //cb не вызовется и вернет резульат 2
// console.log(func(0))
// console.log(func(0))
// console.log(func(0))
// console.log(func(-6)) 

// obj = {type:'computer'}
// console.log(obj.type+'s')

// const parser = (arrObjs) => {
//     let finalArr = []
//     let t
//     for(obj of arrObjs) {
//         if(obj.type==='owner') {
//             delete obj.type
//             finalArr.push(obj)
//         }
//     }
//     for (obj of arrObjs) {
//         if(obj.type!='owner') {
//             t = obj.type + 's'
//             for(human of finalArr) {
//                 if(obj.owner==human.name) {
//                     human[t] = []
//                 }
//             }   
//         }
//     }
//     for(obj of arrObjs) {
//         if(obj.type != 'owner') {
//             t = obj.type + 's'
//             delete obj.type
//             for(human of finalArr) {
//                 if(obj.owner==human.name) {
//                     delete obj.owner
//                     human[t].push(obj)
//                 }
//         }
//     }
// }
//  return finalArr
// }
// console.log(parser([
//     {
//         type: 'owner',
//         name: 'Vova',
//         age: 12
//     },
//     {
//         type: 'computer',
//         name: 'someComputer',
//         oc: 'Mac',
//         owner: 'Vova'
//     },
//     {
//         type: 'computer',
//         name: 'someComputer',
//         oc: 'Mac',
//         owner: 'Vova'
//     },
//     {
//         type: 'phone',
//         name: 'somePhone',
//         oc: 'ios',
//         owner: 'Vova'
//     },
//     {
//         type: 'owner',
//         name: 'Den4ik',
//         age: 11
//     },
//     {
//         type: 'computer',
//         name: 'someComputer',
//         oc: 'Mac',
//         owner: 'Den4ik',
        
//     },
//     {
//         type: 'computer',
//         name: 'someComputer',
//         oc: 'Mac',
//         owner: 'Den4ik'
//     },
//     {
//         type: 'phone',
//         name: 'somePhone',
//         oc: 'ios',
//         owner: 'Den4ik'
//     }]))

// let a = parser([
//     {
//         type: 'owner',
//         name: 'Vova',
//         age: 12
//     },
//     {
//         type: 'computer',
//         name: 'someComputer',
//         oc: 'Mac',
//         owner: 'Vova'
//     },
//     {
//         type: 'computer',
//         name: 'someComputer',
//         oc: 'Mac',
//         owner: 'Vova'
//     },
//     {
//         type: 'phone',
//         name: 'somePhone',
//         oc: 'ios',
//         owner: 'Vova'
//     },
//     {
//         type: 'owner',
//         name: 'Den4ik',
//         age: 11
//     },
//     {
//         type: 'computer',
//         name: 'someComputer',
//         oc: 'Mac',
//         owner: 'Den4ik',
        
//     },
//     {
//         type: 'computer',
//         name: 'someComputer',
//         oc: 'Mac',
//         owner: 'Den4ik'
//     },
//     {
//         type: 'phone',
//         name: 'somePhone',
//         oc: 'ios',
//         owner: 'Den4ik'
//     }])

//     console.log(a[1].computers)


// let m = {computers:[0]}
// let obj = {type:1}
// m.computers[0] = obj
// console.log(m)

// '{name: 'Vova', age: 12, type: 'owner'}' -> {name: 'Vova', age: 12, type: 'owner'}
// const createObjFromStr = (str) => {
//     let strObj = {}, arrStr = [], newStr, key, value, counter = 0
//     if(str[0] != '{' || str.slice(-1) != '}') return ('ERROR')
//     newStr = str.slice(1, -1)
//     arrStr = newStr.split(', ')
//     for(el of arrStr) {
//         for(char of el) {
//             if(char==':') {
//                 counter++
//             }
//         }
//         if(counter!=1) {
//             return ("ERROR")
//         }
//         counter = 0
//     }
//     for(el of arrStr) {
//         if(!(el.includes(":"))) {
//             return ("ERROR")
//         }
//         [key, value] = el.split(": ")
//         strObj[key] = value.replace(/[^a-zа-яё0-9\s]/gi, '')
//     }
//     return strObj
// }
// console.log(createObjFromStr("{name: 'Vova', age: 12, type: 'owner'}"))

// let counter = 0
// let str = "{name: 'Vova', age: 12, type: 'owner'}"
// for(el of str) {
//     if(el==':') {
//         counter++
//     }
// }
// console.log(counter)

// const useMemo = (func) => { // Рассмотрен случай, когда функция func, передаваемая в качестве аргумента ф-ции useMemo, получает на вход лишь один аргумент
//     let Res = new Map()
//     let Args = []
//     return function () {
//             let curArgs = []
//             for(let i=0; i<arguments.length; i++) {
//                 curArgs.push(arguments[i])
//             }
//             for(let i=0; i<Args.length; i++) {
//                 if(Args[i]===curArgs) {
//                     return (Res.get(curArgs) + "(repeated)")
//                 }
//             }
//             Args.push(curArgs)
//             Res.set(curArgs, func(arguments))
//             return Res.get(curArgs)
//             }
// }
// const cb = (num) => num + 1
// const func = useMemo(cb)
// console.log(func(1)) //cb вызовется и вернет резульат 2
// console.log(func(1)) //cb не вызовется и вернет резульат 2

const useMemo = (func) => { // Рассмотрен случай, когда функция func, передаваемая в качестве аргумента ф-ции useMemo, получает на вход лишь один аргумент
    let Res = {}
    let Args = []
    return function () {
            curArg = arguments[0]
            for(let i=0; i<Args.length; i++)
                if(Args[i]===curArg) return (Res[curArg] + "(repeated)")
            Args.push(curArg)
            Res[curArg] = func(curArg)
            return Res[curArg]
            }
}

const cb = (num) => num + 1
const func = useMemo(cb)
console.log(func(1)) //cb вызовется и вернет резульат 2
console.log(func(1)) //cb не вызовется и вернет резульат 2
console.log(func(0)) 
console.log(func(0)) 
console.log(func(3))
console.log(func(0)) 
console.log(func(0)) 