function largestPairSum (numbers) {
  let sorted = numbers.sort((a,b)=> a - b);
  let largest = sorted[sorted.length -1];
  let secondLargest = sorted[sorted.length - 2];
  let sum = largest + secondLargest;
  return sum;
}