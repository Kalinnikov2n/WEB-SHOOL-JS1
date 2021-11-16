const calc = (x) => {
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
// 2


//  const useMemo = (x) => {
//      return rezult(cb){

//      }
// }

// var a = []
// const cb = (num) => num + 1
// const func = useMemo(cb)
// func(1) //cb вызовется и вернет резульат 2
// func(1) //cb не вызовется и вернет резульат 2
