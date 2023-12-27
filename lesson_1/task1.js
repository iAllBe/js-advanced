"use strict";

/*
###Задание 1
Создайте обычный объект "Музыкальная коллекция", который можно итерировать.
Каждая итерация должна возвращать следующий альбом из коллекции. Коллекция 
альбомов - это массив внутри нашего объекта (создать несколько альбомов самому).
Каждый альбом имеет следующую структуру:
{
  title: "Название альбома",
  artist: "Исполнитель",
  year: "Год выпуска"
}
Используйте цикл for...of для перебора альбомов в музыкальной коллекции и 
вывода их в консоль в формате:
"Название альбома - Исполнитель (Год выпуска)"
*/


"use strict";

// Создаем музыкальную коллекцию
const musicalCollection = {
  albums: [
    { title: "The Best of Kirkorov", artist: "Kirkorov", year: "2024" },
    { title: "Last Christmas", artist: "Wham!", year: "1986" },
    { title: "99 Luftballons", artist: "Nena", year: "2000" },
  ],

  // Добавляем метод для итерации по альбомам
  // Итератор должен возвращать следующий альбом при каждом вызове next()
  [Symbol.iterator]: function () {
    let currentIndex = 0;
    return {
      next: () => {
        if (currentIndex < this.albums.length) {
          const album = this.albums[currentIndex++];
          return { value: album, done: false };
        } else {
          return { done: true };
        }
      },
    };
  },
};
//-----------------------------------------------------------------//
console.log('//-------Task01-------//')
// Используем цикл for...of для перебора
for (const album of musicalCollection) {
  console.log(`${album.title} - ${album.artist} (${album.year})`);
}