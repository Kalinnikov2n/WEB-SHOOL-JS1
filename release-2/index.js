// [1,5, 2], -1 -> [5, 2, 1]
// [1, 5, 2], 1 -> [1, 2, 5]

const sorting = (a,x) => {
    var b=a.sort();
    if (x==1){
        console.log(b)
    } else{
        console.log(b.reverse())
    }
}
// sorting([1,2,3],1)
// [{age: 15, height: 140}, {age: 14, height: 150}], age -> [{age: 14, height: 150}, {age: 15, height: 150}]
const deepSorting = (da,l) => {
    if (l=="height"){
        console.log(da.sort((a,b) =>  a.height-b.height ))
    } else{
        console.log(da.sort((a,b) =>  a.age-b.age ))
    }
}
// deepSorting([{"age": 15, "height": 140}, {"age": 14, "height": 150},{"age": 13, "height": 180}], "age")




// ['d', 1, 3, null] -> [1, 3]
const getNumbers = (array) => {
    array = array.filter(item => typeof item === "number");
    console.log(array);
}
// getNumbers(['d', 1, 3, null])




// [1, 5, 34, -100] -> -100
const min = (arr) => {
    console.log(Math.min(...arr))
}
// min([1, 5, 34, -100])


// [1, 1, 1, 3, 4, 2, 2] -> [1, 3, 4, 2]
const getSet = (arr) => {
    var i,
      len = arr.length,
      out = [],
      obj = {};

  for (i = 0; i < len; i++) {
    obj[arr[i]] = 0;
  }
  for (i in obj) {
    out.push(i);
  }
  console.log(out)
}
// getSet([1, 1, 1, 3, 4, 2, 2])


// // [1, 1, 1, 3, 4, 2, 2, 2] -> [1, 2]
const findTheMostReapetedEls = (names) => {
    var uniq = names
    .map((name) => {
      return {
        count: 1,
        name: name
      }
    })
    .reduce((a, b) => {
      a[b.name] = (a[b.name] || 0) + b.count
      return a
    }, {})
  
  var duplicates = Object.keys(uniq).filter((a) => uniq[a] > 1)
  
  console.log(duplicates)
}
// findTheMostReapetedEls([1, 1, 1, 3, 4, 2, 2, 2])


// ['[','[', ']', ']' ] -> true
// [']', '[', ']'] -> false
const stack = (arr) => {
    var c =0;
    var m=0;
    if (arr.length%2==0 && arr[0]=='['){
        for(let i=0;i<arr.length;i++){
            if (arr[i]=='['){
                c+=1
            } else{
                m+=1
                if ((m+c)%2!=0){
                    c=-1
                    break
                }
            }
        }
    } else{
        c=-1
    }
    if (c==m){
        console.log(true)
    } else{
        console.log(false)
    }
}
// stack(['[',']','[',']','[','['])

// 'Hi, Nikita', 'Hi' -> true
const checkForBadWord = (a,b) => {
    if(a.indexOf(b,0)!==-1){
        console.log(true)
    } else{
        console.log(false)
    }
}
// checkForBadWord("ghg php","c")
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