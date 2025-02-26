function filter_list(l) {
  // Return a new array with the strings filtered out
  // initialize new empty array
  const integerArray = [];
  // iterate through the l array
  for (let i = 0; i < l.length; i++) {
  // use typeof to determine if l[i] is a number
    if (typeof l[i] === "number") {
  // push integers to new array
      integerArray.push(l[i]);
    } 
  // return new array
  } return integerArray;
}