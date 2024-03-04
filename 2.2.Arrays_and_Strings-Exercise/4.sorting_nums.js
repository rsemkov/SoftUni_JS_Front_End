function solve(the_array) {
    let result_array = [];

    let sorted_array = the_array.sort(function(a, b) {
        return a - b;
    });

    while (sorted_array.length > 0) {        
        result_array.push(sorted_array[0])
        sorted_array.splice(0, 1)
        
        // THIS CHECK MAKES SURE IT WILL WORK EVEN IF THE ARRAY IS WITH ODD COUNT OF NUMBERS IN IT
        if (sorted_array.length > 0) {
            last_idx = sorted_array.length - 1
            result_array.push(sorted_array[last_idx])
            sorted_array.splice(last_idx, 1)
        }
    }

    return result_array;
}

console.log(solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));
