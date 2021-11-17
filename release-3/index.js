// {name: 'Lim', surname: 'Bok', age: 12} -> 'Bok Lim'
const fullName = (object) => {
    console.log(object.surname + " " + object.name)
}


// {key: 5}, 'key2' -> false
// {key: 5}, 'key' -> true
// {key: null}, 'key' -> false
const checkForPropertyAndValue = (object, key) => {
    if (object[key] > 0){
        return true
    } else{
        return false
    }
}

// [{name: 'Vova', age: 12, type: 'owner'}, {type: 'computer', owner: 'Vova', name: 'computerName', oc: 'Mac'}, {type: 'phone', name: 'phoneName', owner: 'Vova', oc: 'ios'}] -> [{name: 'Vova', computers: [{ name: 'computerName', oc: 'Mac'}], phones: [{name: 'phoneName', oc: 'ios'}] }]
const parser = () => {
    //code here
}
// '{name: 'Vova', age: 12, type: 'owner'}' -> {name: 'Vova', age: 12, type: 'owner'}
const createObjFromStr = () => {
    //code here
}