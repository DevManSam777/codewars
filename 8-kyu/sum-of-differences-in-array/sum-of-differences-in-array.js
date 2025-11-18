function sumOfDifferences(arr) {
  if (arr.length <= 1) {
    return 0;
  }
  
  // Sort descending
  const sortedArr = arr.slice().sort((a, b) => b - a);
  // ex suum = (n1 - n2) + (n2 - n3) + (n3 - n4)
  // sum = n1 - n2 + n2 - n3 + n3 - n4
    // All of the middle values cancel out
  // sum = n1 - n4
  // The first element is the largest, the last is the smallest.
  return sortedArr[0] - sortedArr[sortedArr.length - 1];
}