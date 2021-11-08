// 7 - > 13
const fib = (arg) => {
    if(arg==1 || arg==2){
        return 1
    }else{
        return fib(arg-2) + fib(arg-1);
    }
}