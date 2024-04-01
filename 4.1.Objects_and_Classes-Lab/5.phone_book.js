function phone_book(data) {
    let phonebook_data = {}
    let result_data = []

    for (item of data){
        let current_data = item.split(' ')
        let person = current_data[0]
        let number = current_data[1]

        phonebook_data[person] = number

    }

    for (let person_name in phonebook_data) {
        result_data.push(`${person_name} -> ${phonebook_data[person_name]}`)
    }


    // Object
    // .keys(phonebook_data)
    // .forEach(person_name => result_data.push(`${person_name} -> ${phonebook_data[person_name]}`))

    console.log(result_data.join('\n'))


}


phone_book(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344'])