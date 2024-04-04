function solve(arr_input) {
    let employees_and_nums = {}

    for (empl_name of arr_input) {
        let empl_num = empl_name.length
        employees_and_nums[empl_name] = empl_num
    }

    for (let key in employees_and_nums) {
        console.log(`Name: ${key} -- Personal Number: ${employees_and_nums[key]}`)
    }

}

solve([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ])
    