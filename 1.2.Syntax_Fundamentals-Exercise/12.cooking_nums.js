function cooking_nums(initial_num, op1, op2, op3, op4, op5) {
    function operation(num, operation) {
        let result;

        if (operation === 'chop') {
            result = num / 2

        } else if (operation === 'dice') {
            result = Math.sqrt(num)

        } else if (operation === 'spice') {
            result = num + 1

        } else if (operation === 'bake') {
            result = num * 3
            
        } else if (operation === 'fillet') {
            result = num * 0.8
            
        }
    
    return result

    }

    let current_result = parseInt(initial_num)
    operations_list = [op1, op2, op3, op4, op5]

    for (let i = 0; i < operations_list.length; i++) {
        current_result = operation(current_result, operations_list[i])
        console.log(current_result);

    }

}

cooking_nums('9', 'dice', 'spice', 'chop', 'bake', 'fillet')
