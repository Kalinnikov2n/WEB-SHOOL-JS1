
const calc = () => {
    var iter = -1;
    var memoryArray = [];
    var lastResult= 0;
    return function(arg){
        memoryArray.push(arg)
        iter +=1
        if(iter==0){
            lastResult=arg;
        }
        if(iter!=0 && typeof(arg)=="number"){
            if(memoryArray[iter-1]=="+"){
                lastResult=lastResult + arg;
                return lastResult
            }
            if(memoryArray[iter-1]=="-"){
                lastResult=lastResult - arg;
                return lastResult
            }
            if(memoryArray[iter-1]=="*"){
                lastResult=lastResult * arg;
                return lastResult
            }
            if(memoryArray[iter-1]=="/"){
                lastResult=lastResult / arg;
                return lastResult
            }
        }
    }
}

// const myCalc = calc();
// myCalc(5)
// myCalc('+')
// myCalc(3)
// myCalc('/')
// myCalc(4)
// 2

const useMemo = (func) => {
    var memoryArray = [];
    var cbFunc = func;
    return function(arg){
        if(memoryArray[arg]){
            return(memoryArray[arg]);
        }else{
            memoryArray[arg]=cbFunc(arg);
            return(memoryArray[arg]);
        }
    }
}
const cb = (num) => num + 1
const func = useMemo(cb)
func(1) //cb вызовется и вернет резульат 2
func(1) //cb не вызовется и вернет резульат 2