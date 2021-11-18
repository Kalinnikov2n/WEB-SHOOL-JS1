// {name: 'Lim', surname: 'Bok', age: 12} -> 'Bok Lim'
const fullName = (info) => 
{
    console.log(info.surname + " " + info.name);
}
fullName({name: 'Lim', surname: 'Bok', age: 12});


// {key: 5}, 'key2' -> false
// {key: 5}, 'key' -> true
// {key: null}, 'key' -> false

const checkForPropertyAndValue = (obj,key) => 
{
    let hasProperty = obj.hasOwnProperty('' + key);
    if (obj.key > 0) console.log(hasProperty);
    else console.log(false);
}
checkForPropertyAndValue({key: 5}, 'key2');
checkForPropertyAndValue({key: 5}, 'key');
checkForPropertyAndValue({key: null}, 'key');

// [{name: 'Vova', age: 12, type: 'owner'}, {type: 'computer', owner: 'Vova', name: 'computerName', oc: 'Mac'}, {type: 'phone', name: 'phoneName', owner: 'Vova', oc: 'ios'}] -> [{name: 'Vova', computers: [{ name: 'computerName', oc: 'Mac'}], phones: [{name: 'phoneName', oc: 'ios'}] }]
const parser = (arrayOfInfo) => 
{
    let personArray = [{}];
    for(let i=0;i<arrayOfInfo.length;i++){
        if(arrayOfInfo[i].type=="owner"){
            personArray[0].name = arrayOfInfo[i].name
            personArray[0].age = arrayOfInfo[i].age
        }else{
            let deviceArray=[{}]
            deviceArray[0].name = arrayOfInfo[i].name
            deviceArray[0].oc = arrayOfInfo[i].oc
            personArray[0][arrayOfInfo[i].type+"s"] = deviceArray
        }
    }
    console.log(personArray)
}
parser([{name: 'Vova', age: 12, type: 'owner'}, {type: 'computer', owner: 'Vova', name: 'computerName', oc: 'Mac'}, {type: 'phone', name: 'phoneName', owner: 'Vova', oc: 'ios'}]);
// '{name: 'Vova', age: 12, type: 'owner'}' -> {name: 'Vova', age: 12, type: 'owner'}
const createObjFromStr = (str) => 
{
    let obj;
    eval("obj = " + str);
    console.log(obj);
}
createObjFromStr("{name: 'Vova', age: 12, type: 'owner'}");
