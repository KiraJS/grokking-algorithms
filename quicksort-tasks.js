/*
* Напишите код для функции sum
* */

let testArray1 = [1, 3, 1, 1, 7];

function sum(arr) {
  if(arr.length === 0) return 0;
  return arr[0] + sum(arr.splice(1));
};

console.log(sum(testArray1));

/*
* Напишите рекурсивную функцию для подсчета элементов списка
* */

let testArray2 = [1, 3, 1, 1, 7];

function sumListElements(arr) {
  if(arr.length === 0) return 0;
  return 1 + sumListElements(arr.splice(1));
};

console.log(sumListElements(testArray2));

/*
* Найдите наибольшее число в списке
* */

let testArray3 = [1, 112, 3, 1, 1, 7, 111];

function getMax(arr) {
  if(arr.length === 2) {
    return arr[0] > arr[1] ? arr[0] : arr[1];
  };
  if (arr[0] > arr[1]) {
    arr[1] = arr[0];
  }
    return getMax(arr.splice(1));
};

console.log(getMax(testArray3));

/*
* Бинарный поиск рекурсивно
* */

let testArray4 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function reqursionBinarySearch(arr, item) {
  let low = 0,
    high = arr.length,
    mid = Math.floor((low + high) / 2),
    search = arr[mid];
  console.log(search, item);
  if(search === item) return search
  return search < item
    ? reqursionBinarySearch(arr.slice(mid, high), item)
    :  reqursionBinarySearch(arr.slice(low, mid), item);
}

console.log(reqursionBinarySearch(testArray4, 7));

/*
* Значение O при выводе значения каждого элемента
*
* O(n)
* */

/*
* Значение O при удвоении значения каждого элемента
*
* O(n)
* */

/*
* Значение O при удвоении значения первого элемента
*
* O(1)
* */

/*
* Массив состоит из элементов [1, 3, 5, 7]. Сначала каждый умножается на 2, затем на 3 и.т.д
*
* O(n^2)
* */

