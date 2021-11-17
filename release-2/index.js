// [1,5, 2], -1 -> [5, 2, 1]
// [1, 5, 2], 1 -> [1, 2, 5]


 const sorting = (mas,x) => {
     var n = mas.sort()
  if (x==1) { 
      console.log(n)
  }
else{
    console.log(n.reverse())
 }
  }
sorting([1,5,2],-1)



// [{age: 15, height: 140}, {age: 14, height: 150}], age -> [{age: 14, height: 150}, {age: 15, height: 150}]
 const deepSorting = (users) => {
    users.sort((prev, next) => prev.age - next.age)
    console.log(users)
 }
deepSorting([{age: 15, height: 140}, {age: 14, height: 150}])


// ['d', 1, 3, null] -> [1, 3]
const getNumbers = (mas) => {
   console.log(mas.slice(1,3)) //code here
}
getNumbers(['d', 1 , 3, null])





// [1, 5, 34, -100] -> -100
const min = (mas) => {
  let min = mas[0]
  for( let i=0; i< mas.length; i++) { 
  if (mas[0]>mas[i]) min=mas[i] 
} console.log(min) }
min([1,5,34,-100])



// [1, 1, 1, 3, 4, 2, 2] -> [1, 3, 4, 2]

   const getSet = (mas) => {
var n = []
for (let i = 0; i<mas.length; i++) {
   if (mas.indexOf(mas[i])==-1) {
      mas.push(mas[i])
   }
}
console.log(mas)
   }
getSet([1,1,1,3,4,2,2])


// // [1, 1, 1, 3, 4, 2, 2, 2] -> [1, 2]
 const findTheMostReapetedEls = () => {
    //code here
}


// ['[','[', ']', ']' ] -> true
// [']', '[', ']'] -> false
 const stack = () => {
   if (mas.filter(x => x=="]").length == mas.filter(x => x=="[").length){
      console.log(true)
  }
  else {
      console.log(false) //code here
}



// 'Hi, Nikita', 'Hi' -> true
 const checkForBadWord = (stroka,slovo) => {
   
   
console.log(stroka.includes(slovo))

}
checkForBadWord("Hi Nikita", "Hi")



 const customSome = () => {
   let n = 0
   for (let i = 0; i < mas.length; i++ ){
       if (mas[i] % 2 == 0){
           console.log(true)
           n += 1
           break
       }
   if (n == 0){
       console.log(false)
   }
   }
}
customSome([1,2,1,1,1,1])  //code here
}

 






 const customMap = () => {
  const customFind = (mas) => {
   for (let i = 0; i < mas.length; i++ ){
      if (mas[i] % 2 == 0){
          console.log(mas[i])
          break
      }
}  
}
customFind([1,2,1,1,1,1])



 const customReducer = () => {
    //code here
}

 const custonFilter = () => {
    //code here
}