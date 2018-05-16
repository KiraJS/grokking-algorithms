function binarySearch (list, item) {
  let low = 0,
    high = list.length - 1,
    mid = Math.floor((low + high) / 2),
    guess = list[mid];
  while(low <= high){
    mid = low + high;
    guess = list[mid];
    if(guess === item){
      return mid;
    }
    if(guess > item){
      high = mid - 1;
    } else {
      low = mid +1;
    }
  }
  return 'Значения не существует'
};

let searchValue = 4;
let testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(binarySearch(testArray, searchValue));

