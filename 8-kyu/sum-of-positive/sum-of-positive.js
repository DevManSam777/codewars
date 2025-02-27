function positiveSum(arr) {
  
  // iterate through array
  // if a number is positive add it to the accumulator value
  // return 
  
  
  return arr.reduce((acc, currentVal) => {
    return currentVal > 0 ? acc + currentVal : acc
  }, 0)
}