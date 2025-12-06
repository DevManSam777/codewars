function evenNumbers(array, number) {
  // filter out even numbers using modulus operator
  // use slice to create a new array the length of the number argument
  // from the end of the array back
  //return the new array
  
  let evens = array.filter(i => i % 2 === 0);
  console.log(evens)
  let finalArray = [];
  
  let slicedEvensArray = evens.slice(-number);
  return slicedEvensArray;
}
​