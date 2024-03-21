function solve(num1, num2) {
    function calculate_factorial(num) {
        result = 1
        for (let i = 1; i <= num; i++) {
            result *= i
        }
    
        return result
    }

    console.log(`${(calculate_factorial(num1) / calculate_factorial(num2)).toFixed(2)}`)
}

solve(6, 2)