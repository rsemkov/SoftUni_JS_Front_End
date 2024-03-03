function solve(the_array, nth_element) {
    let last_idx = the_array.length - 1;
    let current_idx = 0;
    let result_array = [];

    while (current_idx <= last_idx) {
        result_array.push(the_array[current_idx])
        current_idx += nth_element
    }
    
    return result_array;

}


solve(['1', 
'2',
'3', 
'4', 
'5'], 
6)