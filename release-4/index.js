
const calc = () => {
    let a 
    let op
    return function (arg) { 
    let operators = ['+', '-', '/', '*']
    if (!(operators.indexOf(arg) + 1)) {
            if (a === undefined) a = arg
            else {
                if (op=='+') a+=arg
                if (op=='-') a-=arg
                if (op=='/') a/=arg
                if (op=='*') a*=arg
            }
            return a
    }
    else {
        op = arg 
        return ("Введите значение следующего аргумента выражения!")
    }
}
}

// const myCalc = calc()
// myCalc(5)
// myCalc('+')
// myCalc(3)
// myCalc('/')
// console.log(myCalc(4))
// 2

const useMemo = (func) => { // Рассмотрен случай, когда функция func, передаваемая в качестве аргумента ф-ции useMemo, получает на вход лишь один аргумент
    let Res = {}
    let Args = []
    return function () {
            curArg = arguments[0]
            for(let i=0; i<Args.length; i++)
                if(Args[i]===curArg) return (Res[curArg] + "(repeated)")
            Args.push(curArg)
            Res[curArg] = func(curArg)
            return Res[curArg]
            }
}