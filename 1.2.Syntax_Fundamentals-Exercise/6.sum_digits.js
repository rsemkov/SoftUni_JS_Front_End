function sum_digits(num) {
    nums_sum = 0

    let num_string = num.toString()
    digits_array = num_string.split('')
    
    for (let i = 0; i < digits_array.length; i++) {
        nums_sum += parseInt(digits_array[i])
    }

    console.log(nums_sum);
}

sum_digits(546)