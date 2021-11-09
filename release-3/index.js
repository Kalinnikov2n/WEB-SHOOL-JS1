const { object } = require("underscore")

// {name: 'Lim', surname: 'Bok', age: 12} -> 'Bok Lim'
const fullName = (obj) => {
    return obj.name + ' ' + obj.surname
}

console.log(fullName({name: 'Lim', surname: 'Bok', age: 12}))

// {key: 5}, 'key2' -> false
// {key: 5}, 'key' -> true
// {key: null}, 'key' -> false

const checkForPropertyAndValue = (obj, key) => {
    return (Object.keys(obj)[0] === key && obj.key !== null)
}
// положительное в смысле значение есть? или прям число положительное?
console.log(checkForPropertyAndValue({key: 5}, 'key2'))
console.log(checkForPropertyAndValue({key: 5}, 'key'))
console.log(checkForPropertyAndValue({key: null}, 'key'))

// [{name: 'Vova', age: 12, type: 'owner'}, {type: 'computer', owner: 'Vova', name: 'computerName', oc: 'Mac'}, {type: 'phone', name: 'phoneName', owner: 'Vova', oc: 'ios'}] -> [{name: 'Vova', computers: [{ name: 'computerName', oc: 'Mac'}], phones: [{name: 'phoneName', oc: 'ios'}] }]
const parser = (arrObj) => {
    let newObj = {name: arrObj[0].name}
    let types = []
    for (let i = 1; i < arrObj.length; i++) {
        for (key in arrObj[i]) {
            if (arrObj[i].hasOwnProperty(key) && key.indexOf('type') !== -1) {
                types.push(arrObj[i][key] + 's')
                delete arrObj[i][key]
                delete arrObj[i]['owner']
            } 
        }
    }
    for (let i = 0; i < types.length; i++) {
        let newArr = []
        newArr.push(arrObj[i + 1])
        newObj[types[i]] = newArr
        //newObj.types.push(arrObj[i + 1])
    }
    return newObj
}

console.log(parser( [{name: 'Vova', age: 12, type: 'owner'}, {type: 'computer', owner: 'Vova', name: 'computerName', oc: 'Mac'}, {type: 'phone', name: 'phoneName', owner: 'Vova', oc: 'ios'}]))

// '{name: 'Vova', age: 12, type: 'owner'}' -> {name: 'Vova', age: 12, type: 'owner'}
const createObjFromStr = (str) => {
    str = str.slice(1, str.length - 1)
    let lots = str.split(` `)
    let keys = []
    let values = []
    let dict = {}
    lots.forEach( (element, i) => {
        if (element[element.length - 1] === ",") {
        element = element.slice(0, element.length - 1)
        }
        element[0] === "'" ? element = element.slice(1, element.length - 1) : 1
        element[element.length - 1] === ":" ? keys.push(element) : values.push(element)
        }
    )
    keys.forEach( (key, i) => {
        dict[key.slice(0, key.length - 1)] =  values[i]
        }
    )
    return dict
}

console.log(createObjFromStr("{name: 'Vova', age: 12, type: 'owner'}"))