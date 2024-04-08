function picollo(input_data) {
    let cars_list = []

    function add_car(car_num) {
        if (!cars_list.includes(car_num)) {
          cars_list.push(car_num)  
        }
    }

    function remove_car(car_num) {
        cars_list = cars_list.filter(item => item !== car_num)
    }

    function main() {
        for (item of input_data) {
            let current_data = item.split(', ')
            let action = current_data[0]
            let plate_number = current_data[1]

            if (action === 'IN') {
                add_car(plate_number)
            } else {
                remove_car(plate_number)
            }
        }

        const sorted_list = cars_list.sort()

        if (sorted_list.length > 0) {
            console.log(sorted_list.join('\n'));
        } else {
            console.log('Parking Lot is Empty');
        }

    }

    main()
}

picollo(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'OUT, CA1234TA'])