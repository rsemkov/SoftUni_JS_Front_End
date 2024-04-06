function inventory(array_input) {
    let heroes_list = []

    class Hero {
        constructor(name, level, items) {
            this.name = name
            this.level = Number(level)
            this.items = items.split(', ')
        }
    }

    function add_heroes() {
        for (item of array_input) {
            let [name, level, items] = item.split(' / ')
            let hero = new Hero(name,level, items)
            heroes_list.push(hero)
        }

    }

    add_heroes()

    let sorted_heroes = heroes_list.sort((a, b) => a.level - b.level)
    
    for (current_hero of sorted_heroes){
        console.log(
`Hero: ${current_hero.name}
level => ${current_hero.level}
items => ${current_hero.items.join(', ')}`
        )

    }

}

inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
    ])