function solve(the_array) {
    let result_array = [];

    let sorted_array = the_array.sort((a, b) => a - b)

    while (sorted_array.length > 0) {        
        result_array.push(sorted_array.shift())
        result_array.push(sorted_array.pop())

    }

    return result_array;
}

console.log(solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));

