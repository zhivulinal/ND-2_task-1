'use strict'


// Подключим класс
const PokemonList = require('pokemon-list');


// Подключим списки покемонов
const pokemones  = require('./data/lost')


// Создаем два списка покемонов lost и found
// Спасибо за прием с добавлением атрибутов 
const lost = new PokemonList(...pokemones.slice(0, 4))
const found = new PokemonList(...pokemones.slice(5, 10))


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
lost.max()










































