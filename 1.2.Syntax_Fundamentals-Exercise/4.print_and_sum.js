function print_and_sum(start, end) {
    let nums_list = []
    let nums_sum = 0

    for (let i = start; i <= end; i++) {
        nums_list.push(i);
        nums_sum += i
    }

    console.log(nums_list. join(' '));
    console.log(`Sum: ${nums_sum}`);
}


print_and_sum(50, 60)