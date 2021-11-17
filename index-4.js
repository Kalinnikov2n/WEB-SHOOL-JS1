    const calc = () => {
        let n
        let f
        return function (arg) {
        let znak=['+', '-', '/', '*']
        if (!(znak.indexOf(arg) + 1)) {
        if (n===undefined) n=arg
        else {
        if (f=='+') n+=arg
        if (f=='-') n-=arg
        if (f=='*') n*=arg
        if (f=='/') n/=arg
        }
        return n
        }
        else {
        f=arg
        return f
        }
        }
        }
        const myCalc = calc()
        myCalc(5)
        myCalc('+')
        myCalc(3)
        myCalc('/')
        console.log(myCalc(4))


// const myCalc = calc()
// myCalc(5)
// myCalc('+')
// myCalc(3)
// myCalc('/')
// myCalc(4)
// 2

export const useMemo = () => {
    //code here
}