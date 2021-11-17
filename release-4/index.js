
const calc = () => {
    let n
    let m
    return function (arg) {
        let elements=['+', '-', '*', '/']
        if (!(elements.indexOf(arg) + 1)) {
            if (n===undefined) n=arg
            else {
                if (m=='+') n+=arg
                if (m=='-') n-=arg
                if (m=='*') n*=arg
                if (m=='/') n/=arg
            }
            return n
        }
        else {
            m=arg
            return m
        }
    }
}

const myCalc = calc()
myCalc(5)
myCalc('+')
myCalc(3)
myCalc('/')
console.log(myCalc(4))


const useMemo = (func) => {
    let Res = {}
    let Args = []
    return function () {
        curArg = arguments[0]
        for(let i=0; i<Args.length; i++)
            if(Args[i]===curArg) return Res[curArg]
            Args.push(curArg)
            Res[curArg] = func(curArg)
                return Res[curArg]
    }
    } 