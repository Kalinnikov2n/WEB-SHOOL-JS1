// 7 - > 13
const fib = (index) => {
    var fibonacciArr = [1, 1]
    for (let i = 2; i < index + 1; i++) {
        fibonacciArr.push(fibonacciArr[i -1] + fibonacciArr[i-2])
    }
    return fibonacciArr[index - 1]
}

// Это считается за рекурсию?

console.log(fib(7))