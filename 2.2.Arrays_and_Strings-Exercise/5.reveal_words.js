function solve(the_words, the_sentence) {
    the_words = the_words.split(', ')
    let words_list = the_sentence.split(' ')

    for (let a = 0; a < the_words.length; a++) {
        let word = the_words[a]
        let word_len = word.length

        for (let i = 0; i < words_list.length; i++) {
            let current_word = words_list[i]
            if (current_word[0] === '*' && current_word.length === word_len) {
                words_list[i] = word
            }
        }
    }

    console.log(words_list.join(' '));
}

solve('great',
'softuni is ***** place for learning new programming languages')