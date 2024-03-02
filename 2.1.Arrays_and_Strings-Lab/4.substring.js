function solve(the_str, start_idx, elements_count) {
    result = ''
    for (let i = start_idx; i < start_idx + elements_count && i < the_str.length; i++) {
        result += the_str[i]

    }
    
    console.log(result);
}

solve('SkipWord', 4, 7)