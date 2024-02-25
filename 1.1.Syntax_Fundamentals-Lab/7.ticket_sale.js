function ticket_sale(day_of_week, age) {
    let ticket_cost = 0;

    function kid_price() {
        if (day_of_week === 'Weekday') {
            t_cost = 12
        } else if (day_of_week === 'Weekend') {
            t_cost = 15
        } else if (day_of_week === 'Holiday') {
            t_cost = 5
        }
    
        return t_cost
    }
    
    function adult_price() {
        if (day_of_week === 'Weekday') {
            t_cost = 18
        } else if (day_of_week === 'Weekend') {
            t_cost = 20
        } else if (day_of_week === 'Holiday') {
            t_cost = 12
        }
        
        return t_cost
    }
    
    function pensioner_price() {
        if (day_of_week === 'Weekday') {
            t_cost = 12
        } else if (day_of_week === 'Weekend') {
            t_cost = 15
        } else if (day_of_week === 'Holiday') {
            t_cost = 10
        }
        
        return t_cost
    }

    if (age < 0 || age > 122) {
        console.log("Error!");

    } else if (age >= 0 && age <= 18) {
        ticket_cost = kid_price()

    } else if (age > 18 && age <= 64) {
        ticket_cost = adult_price()

    } else if (age > 64 && age <= 122) {
        ticket_cost = pensioner_price()
    }

    if (ticket_cost !== 0) {
        console.log(`${ticket_cost}$`);
    }
}


ticket_sale('Holiday', 15)