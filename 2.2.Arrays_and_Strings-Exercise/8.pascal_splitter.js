function pascal_splitter(text_input) {
    let result_array = []
    let upper_case_indices = []

    for (let i = 0; i < text_input.length; i++) {
        current_char = text_input[i]
        let lower_case_char = current_char.toLowerCase()
        let upper_case_char = current_char.toUpperCase()

        if (current_char === upper_case_char) {
            upper_case_indices.push(i)
        }
    } 

    for (let a = 0; a < upper_case_indices.length; a++) {
        let start_idx = upper_case_indices[a]
        let end_idx = upper_case_indices[a + 1]

        let the_substring = text_input.substring(start_idx, end_idx)
        result_array.push(the_substring)
    }

    console.log(result_array.join(', '));
    
}

pascal_splitter('SplitMeIfYouCanHaHaYouCantOrYouCan')


// SOLVED_WITH_REGEX

// function pascal_splitter(text_input) {
//     let pattern = /[A-Z][a-z]*/g
//     let result = []

//     let matches = text_input.matchAll(pattern)

//     for (item of matches) {
//         result.push(item[0])
//     }

//     console.log(result.join(', '))
// }
