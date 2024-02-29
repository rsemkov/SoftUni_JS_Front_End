function fruit_calculations(fruit_type, fruit_grams, fruit_price_per_kg) {
    console.log(`I need $${(fruit_grams / 1000 * fruit_price_per_kg).toFixed(2)} to buy \
${(fruit_grams / 1000).toFixed(2)} kilograms ${fruit_type}.`);
}

fruit_calculations('orange', 2500, 1.80)
