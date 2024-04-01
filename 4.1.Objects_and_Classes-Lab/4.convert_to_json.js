function conv_to_json(name, lastName, hairColor) {
    const data_object = {name, lastName, hairColor}

    const result_in_json = JSON.stringify(data_object)

    console.log(result_in_json);

}

conv_to_json('George', 'Jones', 'Brown')
