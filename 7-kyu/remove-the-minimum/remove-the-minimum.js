function removeSmallest(numbers) {
  const minIndex = numbers.indexOf(Math.min(...numbers));
  return numbers.length === 0 ? [] : numbers.slice(0, minIndex).concat(numbers.slice(minIndex + 1));
}