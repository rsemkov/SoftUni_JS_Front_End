function store_provision(arr, arr_2) {
    let result = {}

    for (let i = 0; i < arr.length; i+=2) {
        result[arr[i]] = Number(arr[i + 1])
        }

    for (let i = 0; i < arr_2.length; i+=2) {
        let product = arr_2[i]
        let quantity = Number(arr_2[i + 1])

        if (result[product]) {
            result[product] += quantity
        } else {
            result[product] = quantity
        }
        
    }

    for (let key in result) {
        console.log(`${key} -> ${result[key]}`)
    }
}

store_provision(['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'])