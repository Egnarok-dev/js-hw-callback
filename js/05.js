// # Завдання 5

// Напишіть функцію, яка приймає об'єкт з ключами "name" та "age" та
// callback-функцію. Функція має повертати новий об'єкт, в якому значення ключа
// "name" буде перетворено в верхній регістр, а значення ключа "age" буде збільшено
// на 5.

function transformArray(arr, callBack) {
  arr.forEach(person => {
    let names = person.name.toUpperCase();
    let ages = person.age + 5;
    let newObj = { names, ages };
    callBack(newObj);
  });
}

function callback(result) {
  console.log(`Новий обєкт з внесиними змінами:`, result);
}

const obj = [
  { name: 'Nik', age: 23 },
  { name: 'Oleg', age: 35 },
  { name: 'Olga', age: 21 },
  { name: 'Roma', age: 48 },
  { name: 'Pasha😉', age: 30 },
];

transformArray(obj, callback);
