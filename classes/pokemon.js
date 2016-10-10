/**
* Создим класс Pokemon
*/
module.exports = class Pokemon {
    
    constructor(name, lvl) {
        this.name = name
        this.lvl = lvl
    }
    
    show() {
        console.log(`покемон: ${this.name}, уровень: ${this.lvl}`)
    }
    
    valueOf() {
        return this.lvl;
    }
}