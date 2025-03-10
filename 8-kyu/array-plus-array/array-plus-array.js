function arrayPlusArray(arr1, arr2) {
  // return spread array reduced to accumulate sum 
  return [...arr1, ...arr2].reduce((acc, i) => acc + i); 
}