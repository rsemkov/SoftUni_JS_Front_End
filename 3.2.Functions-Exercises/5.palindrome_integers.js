function solve(ints_array) {

    for (num of ints_array) {
        if (String(num) === String(num).split('').reverse().join('')) {
            console.log('true');
        } else {
            console.log('false');
        }
    }

}

console.log(solve([32,2,232,1010]))