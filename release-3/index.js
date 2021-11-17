// {name: 'Lim', surname: 'Bok', age: 12} -> 'Bok Lim'
const fullName = (onj) => {
   
    let a = (onj.name + ' ' + onj.surname)
    console.log(a)
}

// fullName( {name: 'Lim', surname: 'Bok', age: 12})

const check = (a, b) => {
    console.log(a, b)
    console.log(Boolean (a[b]))
   
}
// {key: 5}, 'key2' -> false
// {key: 5}, 'key' -> true
// {key: null}, 'key' -> false
// check({key: 5}, 'key2')


// [{name: 'Vova', age: 12, type: 'owner'}, {type: 'computer', owner: 'Vova', name: 'computerName', oc: 'Mac'}, {type: 'phone', name: 'phoneName', owner: 'Vova', oc: 'ios'}] -> [{name: 'Vova', computers: [{ name: 'computerName', oc: 'Mac'}], phones: [{name: 'phoneName', oc: 'ios'}] }]
 const parser = (str) => {
    console.log()
}
parser([
    {
        type: 'owner',
        name: 'Vova',
        age: 12
    },
    {
        type: 'computer',
        name: 'someComputer',
        oc: 'Mac',
        owner: 'Vova'
    },
    {
        type: 'phone',
        name: 'somePhone',
        oc: 'ios',
        owner: 'Vova'
    }
])

// '{name: 'Vova', age: 12, type: 'owner'}' -> {name: 'Vova', age: 12, type: 'owner'}
 const createObjFromStr = (str) => {
    //code here
}

