function sum (numbers) {
  // if the array is empty return 0
  // else reduce the array to find the and return the sum of the values of the indices
  return numbers.length === 0 ? 0 : numbers.reduce((a,b) => a + b);
}