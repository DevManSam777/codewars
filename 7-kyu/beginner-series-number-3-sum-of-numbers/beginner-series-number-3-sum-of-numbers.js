function getSum(a, b) {
  // find the high and low number
  
  // use Math.max() and Math.min to find high and low numbers
  let high = Math.max(a,b);
  let low = Math.min(a,b);
  // get the amount of numbers by subtracting the low number from the high number and adding 1
  let totalNums = high - low + 1
  
  // use equation for finding sum of sequential numbers 
  // same as (start + end) * ( end - start + 1) / 2
  return ((high + low) * totalNums) / 2;
}