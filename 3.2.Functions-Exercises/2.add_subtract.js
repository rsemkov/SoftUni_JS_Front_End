function solve(num1, num2, num3) {
    function sum() {

        return num1 + num2

    }

    function subtract() {
        const sum_first_two = sum()

        return sum_first_two - num3

    }

    return subtract()

}

console.log(solve(1,
    17,
    30));