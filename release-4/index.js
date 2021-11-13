const calc = () => {
    let expr = ''
    return (args) => {
        expr += args
        console.log(expr)
        typeof(args) === 'number' ? expr = eval(expr) : 1
        return expr
    }
    
}

const myCalc = calc()
console.log(myCalc(5), myCalc('+'), myCalc(3), myCalc('/'), myCalc(4))

//СПУСТЯ ТЫЩУ ЛЕТ ДО МЕНЯ ДОШЛО ЧТО ПРОЩЕ РАБОТАТЬ СО СТРОКОЙ И СЛОВАРЕМ
const useMemo = (func) => {
    let alreadyDone = ''
    let results = {}     
    return (numbers) => {
        if (alreadyDone.indexOf(numbers) === -1) {
            alreadyDone += numbers
            results[numbers] = func(numbers)
            return ('THE FUNCTION WAS CALLED FOR THE FIRST TIME. YOUR RESULT IS '+ func(numbers))
        }
        return ('THE FUNCTION WAS NOT CALLED FOR THE FIRST TIME. YOUR RESULT WAS ' + results[numbers])
    }
}

const cb = (num) => num + 1
const func = useMemo(cb)
// func(1) //cb вызовется и вернет резульат 2
// func(1) //cb не вызовется и вернет резульат 2

console.log(func(1))
console.log(func(1))