
 const calc = (znak) => {
    if ( typeof x == 'number'){
        if (znak != null){
            if (znak == "+"){
                temp += x
                znak = null
            }
            if (znak == "-"){
                temp -= x
                znak = null
            }
            if (znak == "*"){
                temp *= x
                znak = null
            }
            if (znak == "/"){
                temp /= x
                znak = null
            }
            console.log(temp)
        }
        else {
            temp = x
            console.log(temp)
        }
    }
    else{
        znak = x
    }
}

znak = null
calc(5)
calc('+')
calc(3)
calc('/')
calc(4)

// const myCalc = calc()
// myCalc(5)
// myCalc('+')
// myCalc(3)
// myCalc('/')
// myCalc(4)
// 2

 const useMemo = () => {

}
useMemo()