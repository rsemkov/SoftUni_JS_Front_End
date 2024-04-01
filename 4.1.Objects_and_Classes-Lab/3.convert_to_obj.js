function conv_to_obj(data_input) {
    const original_obj = JSON.parse(data_input)

    // for (let key in original_obj) {
    //     let value = original_obj[key]
    //     console.log(`${key}: ${value}`)
    // }

    Object.keys(original_obj)
    .forEach(key => console.log(`${key}: ${original_obj[key]}`));

}

conv_to_obj('{"name": "George", "age": 40, "town": "Sofia"}')