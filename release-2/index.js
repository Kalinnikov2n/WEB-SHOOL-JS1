// // [1,5, 2], -1 -> [5, 2, 1]
// // [1, 5, 2], 1 -> [1, 2, 5]

    export const sorting = () => {
      const arr = [1, 5 ,2]
      const a = 1
      if (a == 1) {
          arr.sort((a, b) => a - b);
      }
      if (a == -1) {
         arr.sort((a, b) => b - a);
      }
  console.log(arr)
  }




// [{age: 15, height: 140}, {age: 14, height: 150}], age -> [{age: 14, height: 150}, {age: 15, height: 150}]
     const deepSorting = (da,l) => {
      if (l=="height"){
          console.log(da.sort((a,b) =>  a.height-b.height ))
      } else{
          console.log(da.sort((a,b) =>  a.age-b.age ))
      }
  }




 // ['d', 1, 3, null] -> [1, 3]
   export const getNumbers = () => {
      //code here
     var arr = ['d', 1, 3, null, 4, 5, 6, "gt", 'sum', 'true']
     var a = arr.filter(n => {
         return typeof(n) == 'number';
     });
     console.log(a);
  }




  // [1, 5, 34, -100] -> -100
   export const min = () => {
      const a = [1, 5, 34, -100];
      var min = a[0]
      for (i = 0; i < 4; i = i + 1) {
              if  (a[i] < min) {
                  min = a[i];
              }
      }
 console.log(min)
  }



 // [1, 1, 1, 3, 4, 2, 2] -> [1, 3, 4, 2]
  export const getSet = () => {
      var arr = [1, 1, 9, 1, 3, 4, 5, 5, 5, 5, 7, 8, 8, 7, 4, 4, 1, 3, 5, 3, 9, 2, 2]
      var arr2 = []
      var i 
      var el = {}
      for (i = arr.length ;i >= 0;i--) {
          if (arr[i] in el) continue;
          arr2.push(arr[i]);
          el[arr[i]] = 1;
      }
     arr2.shift();     
 console.log(arr2)
  }



// [1, 1, 1, 3, 4, 2, 2, 2] -> [1, 2]
  export const findTheMostReapetedEls = () => {
      var arr = [1, 1, 1, 3, 4, 2, 2, 2];
     var counts = {}, max = 0, res;
     for (var i in arr) { 
       counts[arr[i]] = (counts[arr[i]] || 0) + 1;
       if (counts[arr[i]] > max) { 
         max = counts[arr[i]];
         res = arr[i];
       }
     }
     var results = [];
     for (var j in counts){
       if (counts[j] == max){
         results.push(j);
       }
     }
     console.log(results);
   }




//  // ['[','[', ']', ']' ] -> true
//  // [']', '[', ']'] -> false
   export const stack = () => {
     var a = ['[','[', ']', ']' ]
     var rig = 0
     var lef = 0
      for (i = 0; i < a.length; i = i + 1) {
          if (a[i] == '[') {
              lef = lef + 1
          } else {
              rig = rig + 1
          }
      }
      if (rig == lef) {
          console.log("true")
      } else {
          console.log('false')
      }
  }



// 'Hi, Nikita', 'Hi' -> true
const checkForBadWord = (a,b) => {
  if(a.indexOf(b,0)!==-1){
      console.log(true)
  } else{
      console.log(false)
  }
}

const customSome = () => {
    
}

const customFind = (a) => {
    for(let i=0;i<a.length;i++){
        if(a[i]==0){
            console.log(a[i])
            break
        }
    }
}

const customMap = (a) => {
    for(let i=0;i<a.length;i++){
        a[i]=func(a[i])
    }
    console.log(a)
}

const customReducer = (a) => {
    for(let i=0;i<a.length;i++){
        if (a[i]==a[a.length-1]){
            a[i]=a[i]+a[i-1]
            break
        } else{
            a[i]+=a[i+1]
        }
    }
    return a[a.length-1]
}

const custonFilter = (a) => {
    let b=[]
    for(let i=0;i<a.length;i++){
        if(a[i]>0){
            b.push(a[i])
        }
    }
    console.log(b)
}