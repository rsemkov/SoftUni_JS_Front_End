function calculate_circle_area(input) {
    input_type = typeof(input)

    if (input_type === "number") {
        console.log((Math.PI * input ** 2).toFixed(2));
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${input_type}.`);
    }
}

calculate_circle_area(5)