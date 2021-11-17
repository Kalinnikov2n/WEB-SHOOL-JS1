//  'Nikita' -> 'Hi, Nikita'
let YourName = 'random.name'
  const hiFunction = (name) => {
    //code here
    console.log('Hi, ' + name)

 }
hiFunction(YourName);

// 5, 6 -> 11
  const sum = () => {
    //code here
    const number1 = 1
    const number2 = 5
    console.log(number1 + number2)
  }
sum();

 //5 -> false
 //0 -> true
 //4 -> true
   const isEven = () => {
     //code here
     const coll = 92
     var a
     if (coll % 2 == 0) {
       a = true
     } else {
       a = false
     }
     console.log(a)
  }
  isEven();


 // 2 -> i have 2 apples
   const apples = () => {
     //code here
     const word = "5"
     console.log("I have " + word + " apples")
  }
  apples();


// // 4 -> 16
   const getPower = () => {
     //code here
     function squareIt(number) {
      return number ** 2;
    }
    
    console.log(squareIt(4));
  }
  getPower();

 module.exports = {
     hiFunction,
     sum,
     isEven,
     apples,
     getPower,
 }
