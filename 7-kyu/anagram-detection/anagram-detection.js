// write the function isAnagram
var isAnagram = function(test, original) {
  // check to see if length are different 
  if(test.length != original.length) {
    return false;
  }
  // convert to arrays and sort
  let testArr = test.toLowerCase().split("");
  let originalArr =  original.toLowerCase().split("");
  
  let sortedTest = testArr.sort();
  let sortedOriginal = originalArr.sort();
  // return
  // convert sorted arrays back to strings and compare
  return sortedTest.toString() === sortedOriginal.toString();
} 
​