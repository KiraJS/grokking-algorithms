let  testArray = [1, 4, 7, 8, 0, 2, 5, 6, 9, 2, 3];

function quickSort(arr) {
  if(arr.length <= 1) return arr;
  let index = Math.floor(arr.length/2);
  let pivot = arr[index];
  let less = [];
  let greater = [];
  for(let i = 0; i < arr.length; i++){
    if( arr[i] <= pivot && i !== index){
      less.push(arr[i])
    }
    if( arr[i] > pivot && i !== index){
      greater.push(arr[i])
    }
  }
  return quickSort(less).concat(pivot, quickSort(greater));
}

console.log(quickSort(testArray));