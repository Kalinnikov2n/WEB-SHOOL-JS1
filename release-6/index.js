// 7 - > 13
const fib = (n) => {
    if(n===0) return 0
    if(n===1) return 1
    if(n<0) return ("The ordinal number of the Fibonacci number can't be negative! Pls, restart the program")

    return fib(n-1) + fib(n-2)
}