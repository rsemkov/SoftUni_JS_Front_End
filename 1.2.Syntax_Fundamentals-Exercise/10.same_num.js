function same_num_and_sum(num) {
    let nums_sum = 0
    let all_nums_same = true

    let nums_array = num.toString().split('')
    let current_num = nums_array[0]

    for (let i = 0; i < nums_array.length; i++) {
        nums_sum += parseInt(nums_array[i])
        if (nums_array[i] != current_num) {
            all_nums_same = false
        }
    }

    console.log(all_nums_same);
    console.log(nums_sum);

}

same_num_and_sum(1234)