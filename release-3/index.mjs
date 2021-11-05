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

    let ownerArr = []

    objArr.forEach ( (obj) => {
        obj.type === 'owner' && ownerArr.push(obj)
    })
    
    let computers = []
    let phones = []

    objArr.forEach ( (obj) => {

        if (obj.type !== 'owner') {

            ownerArr = ownerArr.map( owner => {

                if (obj.owner.toLowerCase() === owner.name.toLowerCase()) {

                    let item = obj.type
                    delete obj.type
                    delete obj.owner
                    delete owner.type

                    if (item === 'computer') {
                        computers.push(
                            obj
                        )
                    } else {
                        phones.push(
                            obj
                        )
                    }

                    return(
                        {
                            ...owner,
                            computers: computers,
                            phones: phones
                        }
                    )
                    
                }
    
            })

        }

    })

    return ownerArr
    
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

