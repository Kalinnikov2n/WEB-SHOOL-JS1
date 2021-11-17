
const calc = (a) => {
    var c=""
    c=c.concat(a)
    console.log(Number(c))
    if(a=="+"){
        console.log(myCalc+a)
    }
}
// myCalc(5)
// myCalc("+")
// myCalc(1)
// const myCalc = calc
// myCalc(5)
// myCalc('+')
// myCalc(3)
// myCalc('/')
// myCalc(4)
// 2
var m=0;
var d=0;
const getPower = (a) => {
    console.log(a*a);
}
const useMemo = (c) => {
    d=c(a)
    if (d==m){
        console.log("hduwedhcuwecvuwe")
    }
    m=c(a)
}
const func = useMemo(getPower)
func(1)
func(1)