function solve(names) {
    names
        .sort((a, b) => a.localeCompare(b))
        .forEach((name, counter) => console.log(`${counter + 1}.${name}`))
}

solve(["John", "Bob", "Christina", "Ema"])


// function solve(names) {
//     names.sort((a, b) => {
//         return a.localeCompare(b);
//     });

//     counter = 1

//     for (let i = 0; i < names.length; i++) {
//         console.log(`${counter}.${names[i]}`);
//         counter += 1
//     }
// }

// solve(["John", "Bob", "Christina", "Ema"])

