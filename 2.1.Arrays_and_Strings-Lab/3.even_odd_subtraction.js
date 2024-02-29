function solve(the_array) {
    let even_sum = 0;
    let odd_sum = 0;

     for (let i = 0; i < the_array.length; i++) {
        current_num = the_array[i]
        if (current_num % 2 === 0) {
            even_sum += current_num
        } else {
            odd_sum += current_num
        }
     }

    console.log(even_sum - odd_sum)
}

solve([3,5,7,9])