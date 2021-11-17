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
const parser = () => {
    //code here
}

// '{name: 'Vova', age: 12, type: 'owner'}' -> {name: 'Vova', age: 12, type: 'owner'}
const createObjFromStr = (str) => {
        let strObj = {}, arrStr = [], newStr, key, value, counter = 0
        if(str[0] != '{' || str.slice(-1) != '}') return ('ERROR')
        newStr = str.slice(1, -1)
        arrStr = newStr.split(', ')
        for(el of arrStr) {
           for(char of el) {
                if(char==':') {
                    counter++
                }
            }
            if(counter!=1) {
                return ("ERROR")
            }
            counter = 0
        }
        for(el of arrStr) {
            if(!(el.includes(":"))) {
                return ("ERROR")
            }
            [key, value] = el.split(": ")
            strObj[key] = value.replace(/[^a-zа-яё0-9\s]/gi, '')
        }
        return strObj
    }

