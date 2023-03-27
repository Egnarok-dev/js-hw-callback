// # Завдання 3

// Напишіть функцію, яка приймає масив об'єктів, які містять ім'я та вік
// користувачів, і повертає масив об'єктів тільки з користувачами, вік яких менше
// за 32 років. Масив виводимо в консоль за допомогою callback


function addArray (arr, filterValue, callback){
  arr.forEach(person =>{
    if (person.age < filterValue) {
      const newObj = person
      callback(newObj)
    }
  })
}

function callBack(result) {
    console.log(`Список користувачів:`, result);
       
}

const obj = [
  { name: 'Nik', age: 23 },
  { name: 'Oleg', age: 35 },
  { name: 'Olga', age: 21 },
  { name: 'Roma', age: 48 },
  { name: 'Pasha😉', age: 30 },
];
const filterValue = 32


addArray(obj, filterValue, callBack)