function solve(num) {
    let current_num = num

    while (true) {
        let current_num_digits_array = Array.from(String(current_num), Number)

        let digits_count = current_num_digits_array.length
        let digits_sum = current_num_digits_array.reduce((acc, digit) => acc + digit, 0)
        let average_digit_value = digits_sum / digits_count

        if (average_digit_value > 5) {
            break
        }

        current_num = Number(String(`${current_num}9`))

    }

    console.log(current_num)
}

solve(5835)