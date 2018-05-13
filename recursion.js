function recursion (value){
  console.log(value);
  if(value){
    value--;
    recursion (value)
  }
  return 'Выход из рекурсии';
}

console.log(recursion(10));
