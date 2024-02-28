function road_radar(driving_speed, area) {
    function speeding_check(limit) {
        let speeding_status;
        speeding_over_limit = driving_speed - limit

        if (speeding_over_limit <= 0) {
            speeding_status = 'not speeding' 
        } else if (speeding_over_limit <= 20) {
            speeding_status = 'speeding'
        } else if (speeding_over_limit <= 40) {
            speeding_status = 'excessive speeding'
        } else {
            speeding_status = 'reckless driving'
        }

        if (speeding_status === 'not speeding') {
            console.log(`Driving ${driving_speed} km/h in a ${limit} zone`)
        } else {
            console.log(`The speed is ${speeding_over_limit} km/h faster than the allowed speed of ${limit} - ${speeding_status}`);
        }
    }

    let speed_limit;

    if (area === 'motorway') {
        speed_limit = 130
    } else if (area === 'interstate') {
        speed_limit = 90
    } else if (area === 'city') {
        speed_limit = 50
    } else if (area === 'residential') {
        speed_limit = 20
    }
        
    speeding_check(speed_limit)

}

road_radar(120, 'interstate')