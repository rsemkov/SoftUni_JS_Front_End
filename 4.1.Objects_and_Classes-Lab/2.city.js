function solve(data_input) {

    for (let key in data_input) {
        let value = data_input[key]
        console.log(`${key} -> ${value}`)
    }

}

solve({
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
})