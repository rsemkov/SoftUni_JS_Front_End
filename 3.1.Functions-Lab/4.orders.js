function solve(product, quantity) {
    const prices = {
        
        'coffee': 1.50,
        'water':  1.00,
        'coke':  1.40,
        'snacks': 2.00
    }

    let total_cost = prices[product] * quantity

    return total_cost.toFixed(2)
}

console.log(solve('water', 5))

