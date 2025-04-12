"use strict";
​
function flattenAndSort(array) {
   // use flat method with Infinity arguement to flatten all nested arrays
  let flattenedArray = array.flat(Infinity);
  // sort flattened array in ascending order and return
  return flattenedArray.sort((a,b) => a - b);
}