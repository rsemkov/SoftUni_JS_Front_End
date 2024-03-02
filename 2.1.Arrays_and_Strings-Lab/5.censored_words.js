function censored_words(sentence, word) {
    while (sentence.includes(word)){
        sentence = sentence.replace(word, '*'.repeat(word.length))
    }

    console.log(sentence);
}

censored_words('Find the hidden word hidden', 'hidden')
