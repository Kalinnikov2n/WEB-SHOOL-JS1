// {name: 'Lim', surname: 'Bok', age: 12} -> 'Bok Lim'

let person = {
    name: 'Lim', 
    surname: 'Bok', 
    age: 12,
}

const fullName = () => {
    let full = person.name + ' ' + person.surname
    console.log(full);
}

fullName ();

// {key: 5}, 'key2' -> false
// {key: 5}, 'key' -> true
// {key: null}, 'key' -> false



const checkForPropertyAndValue = (obj, key) => {
    let result = obj.hasOwnProperty (key);
    obj.key <= 0 ? console.log (false) : console.log (true); 
}

checkForPropertyAndValue ({key: null}, 'key')

// [{name: 'Vova', age: 12, type: 'owner'}, {type: 'computer', owner: 'Vova', name: 'computerName', oc: 'Mac'}, {type: 'phone', name: 'phoneName', owner: 'Vova', oc: 'ios'}] -> [{name: 'Vova', computers: [{ name: 'computerName', oc: 'Mac'}], phones: [{name: 'phoneName', oc: 'ios'}] }]

let vova = {    
    name: 'Vova', 
    age: 12, 
    type: 'owner',   
}

let computer = {
    type: 'computer', 
    owner: 'Vova', 
    name: 'computerName', 
    oc: 'Mac',
}

let phone = {
    type: 'phone', 
    name: 'phoneName', 
    owner: 'Vova', 
    oc: 'ios',
}

const parser = () => {
    vova.computer = computer;
    vova.phone = phone;
    console.log(vova);
}

parser ();

// '{name: 'Vova', age: 12, type: 'owner'}' -> {name: 'Vova', age: 12, type: 'owner'}
const createObjFromStr = (str) => {
    console.log (eval ('object =' + str));
}

createObjFromStr ('{name: 'Vova', age: 12, type: 'owner'}')
