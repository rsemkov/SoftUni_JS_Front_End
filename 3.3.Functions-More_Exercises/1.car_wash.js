function solve(arr) {
    result = 0

    for (item of arr) {
        if (item === 'soap') {
            result += 10
        } else if (item === 'water') {
            result *= 1.2
        } else if (item === 'vacuum cleaner') {
            result *= 1.25
        } else if (item === 'mud') {
            result *= 0.9
        } 
    }

    console.log(`The car is ${result.toFixed(2)}% clean.`)

}

solve(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water'])
