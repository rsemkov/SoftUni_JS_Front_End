function words_tracker(array_input) {
    let words_and_counts = {}

    let words_searched = array_input[0].split(' ')
    let words_list = array_input.slice(1, array_input.length)

    for (word of words_searched) {
        words_and_counts[word] = 0
    }

    for (word of words_list){
        if (word in words_and_counts) {
            words_and_counts[word] += 1
        }
    }

    let sorted_words = Object.entries(words_and_counts).sort((a, b) => b[1] - a[1])
    
    for (item of sorted_words) {
        console.log(`${item[0]} - ${item[1]}`);
    }

}

words_tracker([
    'this sentence', 
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
    ])