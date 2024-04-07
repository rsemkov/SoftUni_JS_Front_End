function solve(string_input) {
    let words_occurr = {}
    let words_as_array = string_input.split(' ').map(element => element.toLowerCase())
    let result = []

    for (item of words_as_array) {
        if (!(item in words_occurr)) {
            words_occurr[item] = 0
        }

        words_occurr[item] += 1
    }

    for (let key in words_occurr) {
        if (words_occurr[key] % 2 != 0) {
            result.push(key)
        }
    } 

    console.log(result.join(' '))
}

solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')