function loading_bar(num) {
    let complete_loading = false
    let percentage_symbols_count = num / 10
    let dots_count = 10 - percentage_symbols_count
    let result = ''

    for (let i = 0; i < percentage_symbols_count; i++) {
        result += '%'
    }

    for (let i = 0; i < dots_count; i++) {
        result += '.'
    }

    if (num === 100) {
        console.log('100% Complete!\n[%%%%%%%%%%]');
    } else {
        console.log(`${num}% [${result}]\nStill loading...`);
    }

}

loading_bar(50)