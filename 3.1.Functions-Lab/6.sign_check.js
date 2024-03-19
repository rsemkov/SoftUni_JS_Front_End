function solve(a, b, c) {
    let negative_nums_count = 0
    nums_array = [a, b, c]

    for (num of nums_array) {
        if (num < 0) {
            negative_nums_count += 1
        }
    }

    if (negative_nums_count === 1 | negative_nums_count === 3) {
        return 'Negative'
    }
    return 'Positive'
}

console.log(solve(-1, -2, 3));



// function solve(a, b, c) {
//     if ((a * b * c ) < 0) {
//         return 'Negative'
//     }

//     return 'Positive'
// }

// console.log(solve(-1, 2, 3));

