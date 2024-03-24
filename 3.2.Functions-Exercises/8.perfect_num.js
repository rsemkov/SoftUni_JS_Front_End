function perfect_num_check(num) {
    let divisors_sum = 0

    for (let i = 1; i < num; i++) {
        if (num % i === 0) {
            divisors_sum += i
        }
    }

    if (num > 0 && num === divisors_sum) {
        console.log("We have a perfect number!")
    } else {
        console.log("It's not so perfect.")
    }

}

perfect_num_check(1236498)