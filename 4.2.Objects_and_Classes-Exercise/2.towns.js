function solve(data_input) {
    let towns = []

    for (item of data_input) {
        let result = {town: '', latitude: '', longitude: '' }
        let [current_town, current_latitude, current_longitude] = item.split(' | ');

        result['town'] = current_town
        result['latitude'] = Number(current_latitude).toFixed(2)
        result['longitude'] = Number(current_longitude).toFixed(2)

        towns.push(result)
        
    }

    towns.forEach(a => console.log(a))
}


solve(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625']
)