function count_occurrences(the_string, the_word) {
    let counter = 0;
    words = the_string.split(' ')

    for (i = 0; i < words.length; i++) {
        if (words[i] === the_word) {
            counter += 1
        }
    }
    console.log(counter);
}

count_occurrences('This is a word and it also is a sentence', 'is')
