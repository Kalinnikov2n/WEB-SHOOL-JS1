// {name: 'Lim', surname: 'Bok', age: 12} -> 'Bok Lim'
 const fullName = (key) => {
    console.log(key.surname, key.name)
}
fullName({name: 'Lim', surname: 'Bok', age: 12})



// {key: 5}, 'key2' -> false
// {key: 5}, 'key' -> true
// {key: null}, 'key' -> false

 const checkForPropertyAndValue = (key,namekey) => {
    if (key[namekey] > 0) {
        console.log(true)
    }
    else{
        console.log(false)
    }
}
checkForPropertyAndValue({key: 5}, 'key') 


// [{name: 'Vova', age: 12, type: 'owner'}, {type: 'computer', owner: 'Vova', name: 'computerName', oc: 'Mac'}, {type: 'phone', name: 'phoneName', owner: 'Vova', oc: 'ios'}] -> [{name: 'Vova', computers: [{ name: 'computerName', oc: 'Mac'}], phones: [{name: 'phoneName', oc: 'ios'}] }]
 const parser = (masImen) => {
    const parser = (masImen) => {
        console.log(masImen[0].type, " : ", masImen[0].name)
        console.log("Age: ", masImen[0].age)
        console.log(masImen[1].type, ": ", masImen[1].name, masImen[1].oc)
        console.log(masImen[2].type, ": ", masImen[2].name, masImen[2].oc)
    
}
// '{name: 'Vova', age: 12, type: 'owner'}' -> {name: 'Vova', age: 12, type: 'owner'}
 const createObjFromStr = (string) => {
    try {
        string = JSON.stringify(string)
        var newstr = JSON.parse(string)
        console.log(newstr)
    }
    catch {
        console.log("ERROR")
    }
}


