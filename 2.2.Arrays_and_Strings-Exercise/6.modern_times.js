function solve(the_sentence) {
    let words_array = the_sentence.split(' ')
    let result_array = []

    for (let word of words_array) {
        
        if (/^#[a-zA-Z]+$/.test(word)) {
            result_array.push(word)
        }
    }

    for (let item of result_array) {
        console.log(item.slice(1));
    }
}

solve('The symbol # is known #variously in English-speaking #regions as the #number sign')