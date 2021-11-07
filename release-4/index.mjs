
export const calc = () => {

    let item = 0

    return (oper) => {
        item += oper

        if ( typeof(oper) === 'number' ) {
            item = eval(item)
        }

        return item  
    }

}

// const myCalc = calc()
// myCalc(5)
// myCalc('+')
// myCalc(3)
// myCalc('/')
// myCalc(4)
// 2



export const useMemo = (func) => {
    
    const res = {}

    return (args) => {

        argsKey = "" + args

        if(!res[argsKey]) {
            res[argsKey] = func(args)
        }

        return res[argsKey];

    }
}

const cb = (num) => num + 1
const testFunc = useMemo(cb)

