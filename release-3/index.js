// {name: 'Lim', surname: 'Bok', age: 12} -> 'Bok Lim'
const fullName = (a) => {
    console.log(a.surname+" "+a.name)
}
// fullName({name: 'Lim', surname: 'Bok', age: 12})

// {key: 5}, 'key2' -> false
// {key: 5}, 'key' -> true
// {key: null}, 'key' -> false

const checkForPropertyAndValue = (a,l) => {
    var v=Object.keys(a)
    for (let i=0;i<v.length;i++){
        if(v[i]==l){
            v=Object.entries(a)
            for(let i=0;i<v.length;i++){
                if(v[i][0]==l){
                    if(v[i][1]>0){
                        console.log(true)
                    }else{
                        console.log(false)
                    }
                }
            }
            break
        }
        if ((v[i]==v[v.length-1])&&v[i]!==l){
            console.log(false)
        }
    }
}
// checkForPropertyAndValue({key3:4,key4: 5,key2:-1}, 'key')

// [{name: 'Vova', age: 12, type: 'owner'}, {type: 'computer', owner: 'Vova', name: 'computerName', oc: 'Mac'}, {type: 'phone', name: 'phoneName', owner: 'Vova', oc: 'ios'}] -> [{name: 'Vova', computers: [{ name: 'computerName', oc: 'Mac'}], phones: [{name: 'phoneName', oc: 'ios'}] }]
const parser = () => {
    //code here
}
// '{name: 'Vova', age: 12, type: 'owner'}' -> {name: 'Vova', age: 12, type: 'owner'}
const createObjFromStr = (s) => {
    var s = s,
    object;
    
    eval('object = ' + s);

    console.log(object)
}
createObjFromStr("{name: 'Vova', age: 12, type: 'owner'}")