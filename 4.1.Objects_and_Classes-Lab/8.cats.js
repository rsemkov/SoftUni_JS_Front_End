function create_cat_and_make_it_meow(array_input_data) {
    class Cat {
        constructor(name, age) {
            this.name = name
            this.age = Number(age)
        }
    
        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
    
        }
    
    }

    for (item of array_input_data) {
        current_item = item.split(' ')
        cat_name = current_item[0]
        cat_age = current_item[1]

        const cat = new Cat(cat_name, cat_age)
        cat.meow()

    }

}

create_cat_and_make_it_meow(['Candy 1', 'Poppy 3', 'Nyx 2'])
