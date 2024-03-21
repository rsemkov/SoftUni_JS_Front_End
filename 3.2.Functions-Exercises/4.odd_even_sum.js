function solve(num) {
    const digits_arr = Array.from(String(num), Number)
    let even_sum = 0
    let odd_sum = 0

    for (digit of digits_arr) {
        if (digit % 2 === 0) {
            even_sum += digit
        } else {
            odd_sum += digit
        }
    }

    return `Odd sum = ${odd_sum}, Even sum = ${even_sum}`

}

console.log(solve(1000435))