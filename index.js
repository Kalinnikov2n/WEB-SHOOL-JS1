// 7 - > 13
const fib = (number) => {
    return number <= 1 ? number : fib(number - 1) + fib(number - 2)
}
console.log(fib(7))