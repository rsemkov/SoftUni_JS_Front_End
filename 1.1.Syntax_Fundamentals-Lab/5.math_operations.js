function math_operations(num1, num2, argument) {
    if (argument == '+') {

        console.log(num1 + num2)

    } else if (argument == '-') {

        console.log(num1 - num2)

    } else if (argument == '*') {

        console.log(num1 * num2)
        
    } else if (argument == '/') {

        console.log(num1 / num2)
        
    } else if (argument == '%') {

        console.log(num1 % num2)
        
    } else if (argument == '**') {

        console.log(num1 ** num2)     
    }
}

math_operations(62, 6, '%')
