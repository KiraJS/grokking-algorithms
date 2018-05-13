function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i+1; j < arr.length; j++) {
      if (arr[j] < arr[min]) min = j;
    }
    let temp = arr[min];
    arr[min] = arr[i];
    arr[i] = temp;
  }
  return arr;
}

let testArray = [1, 5, 6, 8, 2 ,4, 9, 0, 3, 7];

console.log(selectionSort(testArray));