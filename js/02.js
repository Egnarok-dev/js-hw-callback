// # Завдання 2

// Напишіть функцію, яка приймає масив чисел та повертає суму всіх чисел, які
// більші за 5.Суму всіх чисел виводимо в консоль через callback


function fillterArray(arr, filterValue, callback) {
  const fillteredArray = arr.filter(num => num > filterValue);
  let sum = 0;
  fillteredArray.forEach(num => {
    sum += num;
  });
  callBack(sum);
}

function callBack(result) {
  console.log(`Сума чисел:`, result);
}

const arr = [23, 3, 12, 4, 1];
const filterValue = 5;

fillterArray(arr, filterValue, callBack);
