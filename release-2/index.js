// [1,5, 2], -1 -> [5, 2, 1]
// [1, 5, 2], 1 -> [1, 2, 5]

const sorting = (numArray,rule) => {
    numArrayLength=numArray.length;
    let changed=true;
    for(let j =0;j<numArrayLength;j++){
        if(changed){
            changed=false;
            for(let i=0 ;i < numArrayLength-1; i++){
                if(numArray[i] < numArray[i+1]){
                    let memoryNum = numArray[i];
                    numArray[i] = numArray[i+1];
                    numArray[i+1] = memoryNum;
                    changed=true;
                }
            }
        }
    }
    if(rule==-1){
        return numArray
    }else{
        return numArray.reverse();
    }
    
}

// [{age: 15, height: 140}, {age: 14, height: 150}], age -> [{age: 14, height: 150}, {age: 15, height: 150}]
const deepSorting = (objectArray,key) => {
    objectArrayLength=objectArray.length;
    let changed=true;
    for(let j =0;j<objectArrayLength;j++){
        if(changed){
            changed=false;
            for(let i=0 ;i < objectArrayLength-1; i++){
                if(objectArray[i][key] > objectArray[i+1][key]){
                    let memoryNum = objectArray[i];
                    objectArray[i] = objectArray[i+1];
                    objectArray[i+1] = memoryNum;
                    changed=true;
                }
            }
        }
    }
    return objectArray
}




// ['d', 1, 3, null] -> [1, 3]
const getNumbers = (numArray) => {
    let newNumArray=[];
    for(let i = 0; i<numArray.length; i++){
        if(typeof(numArray[i])=="number"){
            newNumArray.push(numArray[i])
        }
    }
    return(newNumArray)
}




// [1, 5, 34, -100] -> -100
const min = (numArray) => {
    let minNum=numArray[0];
    for(let i = 0; i<numArray.length; i++){
        if(numArray[i]<minNum){
            minNum=numArray[i];
        }
    }
    return minNum
}



// [1, 1, 1, 3, 4, 2, 2] -> [1, 3, 4, 2]
const getSet = (numArray) => {
    let usedArray=[];
    let newArray=[];
    for(let i = 0; i<numArray.length; i++){
        if(!usedArray[numArray[i]]){
            newArray.push(numArray[i])
            usedArray[numArray[i]]=1;
        }
    }
    return newArray;
}



// // [1, 1, 1, 3, 4, 2, 2, 2] -> [1, 2]
const findTheMostReapetedEls = (numArray) => {
    let usedArray=[];
    let newArray=[];
    let finalArray=[];
    let maxCount=0;
    for(let i = 0; i<numArray.length; i++){
        if(!usedArray[numArray[i]]){
            newArray.push(numArray[i])
            usedArray[numArray[i]]=0;
        }
        usedArray[numArray[i]]+=1;
        if(usedArray[numArray[i]]>maxCount){
            maxCount=usedArray[numArray[i]]
        }
    }
    for(let i = 0; i<newArray.length; i++){
        if(usedArray[newArray[i]]==maxCount){
            finalArray.push(newArray[i])
        }
    }
    return finalArray;
}


// ['[','[', ']', ']' ] -> true
// [']', '[', ']'] -> false
const stack = (stackArray) => {
    if(stackArray.length%2!=0){
        return false
    }else{
        let openPositionLevel=0;
        let i=0;
        for(let i = 0; i<stackArray.length; i++){
            if(openPositionLevel<0){
                return false
            }
            if(stackArray[i]=="["){
                openPositionLevel+=1;
            }
            if(stackArray[i]=="]"){
                openPositionLevel-=1;
            }
        }
        if(openPositionLevel==0){
            return true
        }else{
            return false
        }
    }
}

// 'Hi, Nikita', 'Hi' -> true
const checkForBadWord = () => {
    //code here
}

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