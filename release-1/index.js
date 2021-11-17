//  'Nikita' -> 'Hi, Nikita'
 const hiFunction = (a) => {
   
    console.log("Hi " +a);
    }
    hiFunction("Lera")



// 5, 6 -> 11

 const sum = (x,y) => {
     console.log(x+y);
} 
sum(5,6);




//code here

//5 -> false
//0 -> true
//4 -> true

 function isEven(x) {
  if (x%2==0){
      console.log(true)
  }
  else{
      console.log(false)
  }
}
isEven(5);



// 2 -> i have 2 apples
 const apples = (x) => {
  if(x>1){
      console.log("I have " + x + " apples")
  }  
else{
    console.log("I have " + x + " apple")
}  
}
apples(2);


// 4 -> 16
 const getPower = (x) => {
 console.log(x*x)
}
getPower(4);

module.exports = {
    hiFunction,
    sum,
    isEven,
    apples,
    getPower,
}
