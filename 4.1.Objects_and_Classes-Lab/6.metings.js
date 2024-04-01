function solve(input_data_array) {
    let meetings = {}

    for (item of input_data_array){
        let current_item = item.split(' ')
        let current_weekday = current_item[0]
        let current_person= current_item[1]

        if (meetings.hasOwnProperty(current_weekday)) {
            console.log(`Conflict on ${current_weekday}!`)
        } else {
            console.log(`Scheduled for ${current_weekday}`)
            meetings[current_weekday] = current_person
        }
    }

    for (let item in meetings){
        let day = item
        let person = meetings[item]
        console.log(`${day} -> ${person}`);
    }

}


solve(['Monday Peter',
'Wednesday Bill',
'Monday Tim',
'Friday Tim'])