function login(the_array) {
    let username = the_array[0]
    let password = username.split('').reverse().join('');
    let unsuccessful_tries_counter = 0

    for (i=1; i < the_array.length; i++) {
        if (the_array[i] === password) {
            console.log(`User ${username} logged in.`)
            break
        } else {
            unsuccessful_tries_counter += 1
            if (unsuccessful_tries_counter === 4) {
                console.log(`User ${username} blocked!`)
                break
            } else {
                console.log("Incorrect password. Try again.");
            }
        }
    }
}

login(['sunny','rainy','cloudy','sunny','not sunny'])