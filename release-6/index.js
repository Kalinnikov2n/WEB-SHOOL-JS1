// 7 - > 13
const fib = (index) => {
    return index <= 1 ? index : fib(index - 1) + fib(index - 2);
}

console.log(fib(28));
