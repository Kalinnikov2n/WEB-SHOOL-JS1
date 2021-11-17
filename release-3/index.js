// {name: 'Lim', surname: 'Bok', age: 12} -> 'Bok Lim'
const fullName = (obj) => {
    return(obj.surname+" "+obj.name)
}


// {key: 5}, 'key2' -> false
// {key: 5}, 'key' -> true
// {key: null}, 'key' -> false

const checkForPropertyAndValue = (obj, key) => {
    if(key in obj && obj[key]>0) return true
    return false
}

// [{name: 'Vova', age: 12, type: 'owner'}, {type: 'computer', owner: 'Vova', name: 'computerName', oc: 'Mac'}, {type: 'phone', name: 'phoneName', owner: 'Vova', oc: 'ios'}] -> [{name: 'Vova', computers: [{ name: 'computerName', oc: 'Mac'}], phones: [{name: 'phoneName', oc: 'ios'}] }]
const parser = (arrObjs) => {
    let finalArr = []
    let t
    for(obj of arrObjs) {
        if(obj.type==='owner') {
            delete obj.type
            finalArr.push(obj)
        }
    }
    for (obj of arrObjs) {
        if(obj.type!='owner') {
            t = obj.type + 's'
            for(human of finalArr) {
                if(obj.owner==human.name) {
                    human[t] = []
                }
            }   
        }
    }
    for(obj of arrObjs) {
        if(obj.type != 'owner') {
            t = obj.type + 's'
            delete obj.type
            for(human of finalArr) {
                if(obj.owner==human.name) {
                    delete obj.owner
                    human[t].push(obj)
                }
        }
    }
}
 return finalArr
}
// '{name: 'Vova', age: 12, type: 'owner'}' -> {name: 'Vova', age: 12, type: 'owner'}
const createObjFromStr = (str) => {
    let strObj = {}, arrStr = [], newStr, key, value
    if(str[0] != '{' || str.slice(-1) != '}') return 'ERROR'
    newStr = str.slice(1, -1)
    arrStr = newStr.split(', ')
    for(el of arrStr) {
        if(!(el.includes(":"))) {
            return "ERROR"
        }
        [key, value] = el.split(": ")
        strObj[key] = value.replace(/[^a-zа-яё0-9\s]/gi, '')
    }
    return strObj
}

