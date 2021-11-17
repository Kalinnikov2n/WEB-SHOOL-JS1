
const calc = () => {
    var a;
    var b;

    return function(argument) {
        var func = ['*', '/', '-', '+'];
        if (func.indexOf(argument) + 1){
            if (a === undefined)
            a = argument
            else{
                if (func = '+') a+=argument;
                if (func = '*') a*=argument;
                if (func = '/') a/=argument;
                if (func = '-') a-=argument;
            }
            return a
        }
        else{
            a = argument;
            return a
        }
    }
}

// const myCalc = calc()
// myCalc(5)
// myCalc('+')
// myCalc(3)
// myCalc('/')
// myCalc(4)
// 2

const useMemo = (func) => {
    let result;
    return elements {
        elKey = '' + elements;
        if (!result[elKey]){
            result[elKey] = func(elements)
        }
        return result[elKey];
    }
}