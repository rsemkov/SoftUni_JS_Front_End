function sumTable() {
    const dataValues = document.querySelectorAll('table td:nth-child(2n)')
    const theSum = document.getElementById('sum')

    let result = 0
    for (const el of dataValues) {
        result += Number(el.textContent)
    }

    theSum.textContent = result
}

























// function sumTable() {
//     const tdCostElements = document.querySelectorAll('tr td:last-of-type:not(#sum)')
//     const tdSumElement = document.getElementById('sum')

//     let the_sum = 0
//     for (let el of tdCostElements) {
//         the_sum += Number(el.textContent)
//     }
    
//     tdSumElement.textContent = the_sum

// }


// // tdSumElement.textContent = Array
// // .from(tdCostElements)
// // .reduce((sum, element) => sum + Number(element.textContent), 0);