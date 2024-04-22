function extract(content) {
    const originalContent = document.getElementById('content')
    let contentList = originalContent.textContent

    let result = []
    let current_word = ''
    for (let char of contentList) {
        if (char === '(') {
            current_word = ''
        } else if (char === ')') {
            result.push(current_word)
            current_word = ''
        } else (current_word += char)
    }

    return result.join('; ')


    // const matches = originalContent.textContent.matchAll(/\(([a-zA-Z ]+)\)/g);

    // const text = Array
    //     .from(matches)
    //     .map(match => match[1])
    //     .join('; ');

}

