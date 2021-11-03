// {name: 'Lim', surname: 'Bok', age: 12} -> 'Bok Lim'
export const fullName = (obj) => {
    console.log(obj.name + " " + obj.surname);
}


// {key: 5}, 'key2' -> false
// {key: 5}, 'key' -> true
// {key: null}, 'key' -> false

export const checkForPropertyAndValue = (obj, key) => {
    let hasProperty = obj.hasOwnProperty('' + key);
    console.log(hasProperty);
}

// [{name: 'Vova', age: 12, type: 'owner'}, {type: 'computer', owner: 'Vova', name: 'computerName', oc: 'Mac'}, {type: 'phone', name: 'phoneName', owner: 'Vova', oc: 'ios'}] -> [{name: 'Vova', computers: [{ name: 'computerName', oc: 'Mac'}], phones: [{name: 'phoneName', oc: 'ios'}] }]
export const parser = (objArr) => {
    let newObj;
}
// '{name: 'Vova', age: 12, type: 'owner'}' -> {name: 'Vova', age: 12, type: 'owner'}
export const createObjFromStr = (objStr) => { 
    try {
        let obj;
        eval("obj = " + objStr)
        console.log(obj)
    } catch (err) {
        console.log("cannot convert into obj")
    }
    
}

