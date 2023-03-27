// # Завдання 4

// Напишіть функцію, яка приймає два масиви і callback-функцію для обробки цих
// масивів. Функція має повернути новий масив, який містить всі елементи з обох
// масивів, відсортованих за зростанням.


function mergingDataArrays (arr1, arr2, callBack) {
    const array = arr1.concat(arr2)
    let total = array.sort((a,b) => a - b)
    callBack(total)
}

function callback(result){
    console.log(`Новий масив даних:`, result);
}

const arr1 = [23, 3, 12, 4, 1];
const arr2 = [26, 17, 10, 9, 19];

mergingDataArrays(arr1, arr2, callback)