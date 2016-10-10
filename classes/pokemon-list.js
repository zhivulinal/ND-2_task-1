// Экспортируем класс Pokemon
const Pokemon  = require('./pokemon');

/**
* Создим класс PokemonList
* Экземпляры этого класса
* должны обладать всеми функциями массива.
* Для этого расширим объект Array
*/
module.exports = class PokemonList extends Array {
    
    constructor(...args) {
        super(...args)
    }
    
    // Используем класс Pokemon для создания ячейки и присвоим ей ID
    add(name, lvl) {
        
        if(typeof(name) == 'object')
            this.push(name)
        else
            this.push(new Pokemon(name, lvl))
    }
        
    // метод show , который выводит информацию о покемонах
    // и их общее количество в списке
    show() {
        
        console.log('Покемонов в списке: ' + this.length)
        
        // Используем цикл: forEach и метод show объекта Pokemon
        this.forEach(item => item.show())
    }
    
    remove(name) {
        
        // Найдем индекс ячейки с покемоном
        let index = this.findIndex(index => index.name == name)
        
        // Если покемон не найден
        if (index == -1) console.log('Нет покемона с таким именем')
        
        // Удалим и вернем объект удаляемого покемона
        return this.splice(index, 1)[0]
    }
    
    max() {
        
        let lvl = Math.max(...this)
        
        return this.find(item => item.lvl === lvl)
    }
    
}
