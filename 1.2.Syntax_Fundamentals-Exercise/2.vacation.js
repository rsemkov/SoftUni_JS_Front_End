function cost_calculator(group_count, group_type, day_of_week) {
    let single_cost = 0

    switch (group_type) {
        case 'Students':
            switch (day_of_week) {

                case 'Friday':
                    single_cost = 8.45
                    break;

                case 'Saturday':
                    single_cost = 9.80
                    break;

                case 'Sunday':
                    single_cost = 10.46
                    break;
            }

            break;

        case 'Business':
            switch (day_of_week) {

                case 'Friday':
                    single_cost = 10.90
                    break;

                case 'Saturday':
                    single_cost = 15.60
                    break;

                case 'Sunday':
                    single_cost = 16
                    break;
            }

            break;

        case 'Regular':
            switch (day_of_week) {

                case 'Friday':
                    single_cost = 15
                    break;

                case 'Saturday':
                    single_cost = 20
                    break;

                case 'Sunday':
                    single_cost = 22.50
                    break;
            }

            break;

    }

    let total_price = group_count * single_cost

    if (group_type === 'Students' && group_count >= 30) {
        total_price *= 0.85
    } else if (group_type === 'Business' && group_count >= 100) {
        total_price -= single_cost * 10
    } else if (group_type === 'Regular' && (group_count >= 10 && group_count <= 20)) {
        total_price *= 0.95
    }

    console.log(`Total price: ${total_price.toFixed(2)}`)
}



cost_calculator(40,
    "Regular",
    "Saturday")