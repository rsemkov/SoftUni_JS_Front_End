function print_matix(num) {

    for (let row=0; row < num; row++) {
        let current_line = []
        for (let col=0; col < num; col++) {
            current_line.push(num)
        }
        console.log(current_line.join(' '));

    }
    
}

print_matix(3)
