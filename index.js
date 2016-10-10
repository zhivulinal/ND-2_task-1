'use strict'


// Подключим класс
const PokemonList = require('./classes/pokemon-list')
const Pokemon     = require('./classes/pokemon')

// Подключим список покемонов
const pokemons    = require('./data/list')


/**
* Заполним список объектами покемонов
*/
const objects = pokemons.map(
    obj => new Pokemon(obj.name, obj.lvl)
)


// Создаем два списка покемонов lost и found
// Спасибо за прием с добавлением атрибутов 
const lost = new PokemonList(...objects.slice(0, 4))
const found = new PokemonList(...objects.slice(5, 10))


// Добавим покемонов с список lost
lost.add("Klavaqa", 45)
lost.add("Huchpu", 34)
lost.add("Raken", 37)


// Добавим покемонов в список found
found.add("Ksadf", 45)
found.add("Ryncfs", 78)
found.add("Churbasavr", 46)


// Перенесем покемона из списка lost в список found
found.add(lost.remove("Raken"))


// Выводим информацию о покемонах
lost.show()
found.show()


// Вернем покемона максимального уровеня 
console.log(lost.max())
