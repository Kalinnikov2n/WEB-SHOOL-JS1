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
// 2

const useMemo = () => {
    //code here
}