function stray(numbers) {
  let sortedArray = numbers.sort((a,b) => a - b);
  if(sortedArray[0] === sortedArray[1]) {
    return sortedArray[sortedArray.length - 1];
  } else {
    return sortedArray[0];
  }
}