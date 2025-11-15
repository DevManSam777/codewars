function isSortedAndHow(array) {
//   // Check if the array is sorted in ascending order
//   if (array.every((val, index, arr) => index === 0 || arr[index - 1] <= val)) {
//     return "yes, ascending";
//   }
  
//   // Check if the array is sorted in descending order
//   if (array.every((val, index, arr) => index === 0 || arr[index - 1] >= val)) {
//     return "yes, descending";
//   }
​
//   // If the array is neither ascending nor descending
//   return "no";
  
​
  let isAscending = true;
  let isDescending = true;
​
  // Loop through the array to check for ascending and descending order
  for (let i = 1; i < array.length; i++) {
    if (array[i] < array[i - 1]) {
      isAscending = false;  // If an element is smaller than the previous one, it's not ascending
    }
    if (array[i] > array[i - 1]) {
      isDescending = false;  // If an element is larger than the previous one, it's not descending
    }
  }
​
  // Based on the checks, return the appropriate result
  if (isAscending) {
    return "yes, ascending";
  } else if (isDescending) {
    return "yes, descending";
  } else {
    return "no";
  }
}