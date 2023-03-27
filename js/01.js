// # Завдання 1

// Напишіть функцію, яка приймає масив чисел та повертає новий масив, в якому кожне
// число збільшено на 1. Новий масив виведи в консоль за допомогою функції callback


function calculateNumbers(arr, callback) {
  const array = [];
  for (let value of arr) {
    let newValue = value + 1;
    array.push(newValue);
  }
  callback(array);
}

function callback(result) {
  console.log(`Список чисел збільшених на одиницю:`, result);
}

const arr = [23, 33, 12, 45, 1];

calculateNumbers(arr, callback);
