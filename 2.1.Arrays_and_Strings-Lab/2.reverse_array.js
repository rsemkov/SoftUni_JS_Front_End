function reverse_array(n, the_array) {
    let reversed_array = [];
     for (let i = n - 1; i >= 0; i--) {
        reversed_array.push(the_array[i])
     }

    console.log(reversed_array.join(' '))
}

reverse_array(3, [10, 20, 30, 40, 50])