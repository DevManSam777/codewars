var uniqueInOrder=function(iterable){
  //your code here - remember iterable can be a string or an array
  
  // return an empty array if falsy value
  if (!iterable) {
    return [];
  }
  // initialize an array and spread iterable 
  let arr = [...iterable];
  
  // initialize an empty array to store results values
  let result = [];
  
  // set the current value to the first index of the array
  let current = arr[0]
  
  // push the first index to the results array 
  result.push(arr[0]);
  
  // iterate through the array and  if the current index is not the same as 
  // the current variable value than the current index becomes the current variable
  // push it to the results array
  for (let i =0; i < arr.length; i++) {
    if (arr[i] != current) {
      current = arr[i];
      result.push(current);
    }
    
    // return the results array
  } return result;
  
  
}