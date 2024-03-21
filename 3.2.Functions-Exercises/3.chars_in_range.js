function solve(sym1, sym2) {
    let results_arr = []

    let bigger_ascii = Math.max(sym1.codePointAt(0), sym2.codePointAt(0))
    let smaller_ascii = Math.min(sym1.codePointAt(0), sym2.codePointAt(0))

    for (let i = smaller_ascii + 1; i < bigger_ascii; i++) {
        results_arr.push(String.fromCharCode(i))
    }

    return results_arr.join(' ')

}

console.log(solve('a',
'd'	));