"use strict";

/*
###Задание 2
Вы управляете рестораном, в котором работают разные повара, специализирующиеся 
на определенных блюдах. Клиенты приходят и делают заказы на разные блюда.
Необходимо реализовать функцию newOrder. Создавать вспомогательные функции, 
коллекции, не запрещается. Старайтесь использовать коллекции Map/Set, где это 
актуально. Представленный ниже код должен работать.

Повара и их специализации:
Олег - специализация: Пицца.
Андрей - специализация: Суши.
Анна - специализация: Десерты.

Блюда, которые могут заказать посетители:
Пицца "Маргарита"
Пицца "Пепперони"
Пицца "Три сыра"
Суши "Филадельфия"
Суши "Калифорния"
Суши "Чизмаки"
Суши "Сеякемаки"
Десерт Тирамису
Десерт Чизкейк
*/

// Посетитель ресторана.
class Client {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }
}

// Вам необходимо реализовать класс, который управляет заказами и поварами.

class Chef {
  constructor(name, specialization) {
    this.name = name;
    this.specialization = specialization;
  }
}
class Manager {
  constructor() {
    this.chefs = new Map();
    this.menu = new Map();
  }

  addDish(name, type) {
    this.menu.set(name, type);
  }

  registerChef(name, specialization) {
    const chef = new Chef(name, specialization);
    this.chefs.set(specialization, chef);
  }

  newOrder(client, ...orders) {
    console.log(`Клиент ${client.firstname} ${client.lastname} заказал:`);
    for (const order of orders) {
      const { name, quantity, type } = order;
      if (!this.menu.has(name)) {
        console.error(`Десерт "${name}" - такого блюда не существует.`);
        continue;
      }

      const chef = this.chefs.get(this.menu.get(name));
      console.log(`${type} "${name}" - ${quantity}; готовит повар ${chef.name}`);
    }
  }
}

// Можно передать внутрь конструктора что-либо, если необходимо.
const manager = new Manager();

// Регистрируем поваров.
manager.registerChef("Олег", "Пицца");
manager.registerChef("Андрей", "Суши");
manager.registerChef("Анна", "Десерт");

// Добавляем блюда в меню.
manager.addDish("Маргарита", "Пицца");
manager.addDish("Пепперони", "Пицца");
manager.addDish("Три сыра", "Пицца");
manager.addDish("Филадельфия", "Суши");
manager.addDish("Калифорния", "Суши");
manager.addDish("Чизмаки", "Суши");
manager.addDish("Сеякемаки", "Суши");
manager.addDish("Тирамису", "Десерт");
manager.addDish("Чизкейк", "Десерт");


//-----------------------------------------------------------------//
console.log('//-------Task02-------//')

// Вызовы ниже должны работать верно, менять их нельзя, удалять тоже.
manager.newOrder(
  new Client("Иван", "Иванов"),
  { name: "Маргарита", quantity: 1, type: "Пицца" },
  { name: "Пепперони", quantity: 2, type: "Пицца" },
  { name: "Чизкейк", quantity: 1, type: "Десерт" },
);
// Вывод:
// Клиент Иван заказал: 
// Пицца "Маргарита" - 1; готовит повар Олег
// Пицца "Пепперони" - 2; готовит повар Олег
// Десерт "Чизкейк" - 1; готовит повар Анна

// ---

const clientPavel = new Client("Павел", "Павлов");

manager.newOrder(
  clientPavel,
  { name: "Филадельфия", quantity: 5, type: "Суши" },
  { name: "Калифорния", quantity: 3, type: "Суши" },
);
// Вывод:
// Клиент Павел заказал: 
// Суши "Филадельфия" - 5; готовит повар Андрей
// Суши "Калифорния" - 3; готовит повар Андрей

manager.newOrder(
  clientPavel,
  { name: "Калифорния", quantity: 1, type: "Суши" },
  { name: "Тирамису", quantity: 2, type: "Десерт" },
);
// Вывод:
// Клиент Павел заказал: 
// Суши "Филадельфия" - 5; готовит повар Андрей
// Суши "Калифорния" - 4; готовит повар Андрей
// Десерт "Тирамису" - 2; готовит повар Анна

manager.newOrder(
  clientPavel,
  { name: "Филадельфия", quantity: 1, type: "Суши" },
  { name: "Трубочка с вареной сгущенкой", quantity: 1, type: "Десерт" },
);
// Ничего не должно быть добавлено, должна быть выброшена ошибка:
// Десерт "Трубочка с вареной сгущенкой" - такого блюда не существует.