function sumArray(array) {
  // if falsy or the there is only one item in the array return 0
  if (!array || array.length <= 1) {
    return 0;
  }
  // else sort the array from low to high
  array = array.sort((a, b) => a - b);
  // remove the last index
  array.pop();
  // remove the first index
  array.shift();
  // use the reduce method to add the values, set the initial accumulator value to 0 
  // to cover cases of arrays that become empty after removing the first and last index
  return array.reduce((acc, num) => acc + num, 0);  
  }
​