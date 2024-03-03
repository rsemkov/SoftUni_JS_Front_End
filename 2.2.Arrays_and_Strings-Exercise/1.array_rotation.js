function rotation(the_array, rotations_count) {
    for (let i = 0; i < rotations_count; i++) {
        the_array.push(the_array[0])
        the_array.splice(0, 1)
    }

    console.log(the_array.join(' '));
}

rotation([32, 21, 61, 1], 4)
