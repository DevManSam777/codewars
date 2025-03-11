function sortArray(array) {
  // initialize an array of only the odd numbers from the input array
  // use filter to get only odd numbers
  const oddNumbers = array.filter(num => num % 2 !== 0)
​
  // sort the odd numbers in ascending order
  .sort((a, b) => a - b);
​
  // initialize a variable to keep track of the index in the sorted oddNumbers array
  let oddIndex = 0;
​
  // create a new array by mapping each element of the original array
  const sortedArray = array.map(num => {
    
    // if the current number is even
    if (num % 2 === 0) {
      
      // if even, return the number as is.
      return num;
      
      
    } else {
       // if odd, return the next odd number from the sorted oddNumbers array
      // increment oddIndex after returning the odd number
      return oddNumbers[oddIndex++];
    }
  });
​
  // return the new array with sorted odd numbers and original even number positions
  return sortedArray;
}