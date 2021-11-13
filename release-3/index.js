// {name: 'Lim', surname: 'Bok', age: 12} -> 'Bok Lim'
const fullName = (person) => {
    return person.surname + " " + person.name
}


// {key: 5}, 'key2' -> false
// {key: 5}, 'key' -> true
// {key: null}, 'key' -> false

const checkForPropertyAndValue = (someObject, key) => {
    if(someObject[key]>0){
        return true
    }else{
        return false
    }
}

// [{name: 'Vova', age: 12, type: 'owner'}, {type: 'computer', owner: 'Vova', name: 'computerName', oc: 'Mac'}, {type: 'phone', name: 'phoneName', owner: 'Vova', oc: 'ios'}] -> [{name: 'Vova', computers: [{ name: 'computerName', oc: 'Mac'}], phones: [{name: 'phoneName', oc: 'ios'}] }]
const parser = (someArray) => {
    let personArray = [{}];
    for(let i=0;i<someArray.length;i++){
        if(someArray[i].type=="owner"){
            personArray[0].name = someArray[i].name
            personArray[0].age = someArray[i].age
        }else{
            let deviceArray=[{}]
            deviceArray[0].name = someArray[i].name
            deviceArray[0].oc = someArray[i].oc
            personArray[0][someArray[i].type+"s"] = deviceArray
        }
    }
    return personArray
}
// '{name: 'Vova', age: 12, type: 'owner'}' -> {name: 'Vova', age: 12, type: 'owner'}
const createObjFromStr = (someString) => {
    let workArray={};
    let workString=someString.slice(1, (someString.length-1));
    workString=workString.split(' ');
    if(workString.length%2!=0){
        return "ERROR"
    }
    for(let i = 0; i < workString.length; i+=2){
        let firstDelet=1;
        let lastDelet=2;
        if(i+2>=workString.length){
            lastDelet=1;
        }
        if(!isNaN(workString[i+1].slice(0,workString[i+1].length-1)-1)){
            firstDelet=0;
            lastDelet=1;
        }
        workArray[workString[i].slice(0,(workString[i].length-1))] = workString[i+1].slice(firstDelet,(workString[i+1].length-lastDelet));
    }
}