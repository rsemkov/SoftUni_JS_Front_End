function solve(the_sentence) {
    let pattern = /#([a-zA-Z]+)/g
    let result = the_sentence.matchAll(pattern)

    for (item of result) {
        console.log(item[1]);
    }
}

solve('The symbol # is known #variously in English-speaking #regions as the #number sign')