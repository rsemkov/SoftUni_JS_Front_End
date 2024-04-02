function address_book(data_input) {
    let address_book = {}

    for (item of data_input) {
        let current_item = item.split(':')
        let current_name = current_item[0]
        let current_address = current_item[1]

        address_book[current_name] = current_address

    }

    let sorted_address_book = Object
                            .entries(address_book)
                            .sort((a, b) => a[0].localeCompare(b[0]))


    for (item of sorted_address_book) {
        let person = item[0]
        let address = item[1]
        console.log(`${person} -> ${address}`);
    }
}

address_book(['Tim:Doe Crossing',
'Bill:Nelson Place',
'Peter:Carlyle Ave',
'Bill:Ornery Rd'])