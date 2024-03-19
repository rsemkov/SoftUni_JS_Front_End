function solve(num1, num2, operator) {
    const operations = {
        'divide': (a, b) => a / b,
        'add': (a, b) => a + b,
        'subtract': (a, b) => a - b,
        'multiply': (a, b) => a * b
    }

    return operations[operator](num1, num2)

}

console.log(solve(5, 5, 'multiply'));
