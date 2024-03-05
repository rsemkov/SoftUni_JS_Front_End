function solve(searched_word, the_sentence) {
    let words_array = the_sentence.split(' ');
    let word_found = false;

    for (let word of words_array) {
        if (word.toLowerCase() === searched_word.toLowerCase()) {
            word_found = true;
            console.log(searched_word);
            break
        }
    }

    if (word_found === false) {
        console.log(`${searched_word} not found!`);
    }
}

solve('python',
'JavaScript is the best programming language'	)
