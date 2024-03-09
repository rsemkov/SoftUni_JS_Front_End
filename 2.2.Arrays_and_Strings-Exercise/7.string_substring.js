function solve(searched_word, the_sentence) {
    let words_array = the_sentence.split(' ');
    let word_found = false;

    let matches_found = words_array.filter(word => word.toLowerCase() === searched_word.toLowerCase())

    if (matches_found.length > 0) {
        console.log(matches_found[0]);
    } else {
        console.log(`${searched_word} not found!`);
    }
}

solve('python',
'JavaScript is the best programming python'	)


