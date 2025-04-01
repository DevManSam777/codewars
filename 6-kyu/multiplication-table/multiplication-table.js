function multiplicationTable(size) {
  // initialize an outer array to hold inner arrays
  let outerArray = [];
  // use a for loop that iterates from 0 to size value
  for (let i = 0; i < size; i ++) {
  // initialize an inner arrays to hold size number of values
    let innerArray = [];
    // use an inner for loop from 0 to size value to add values to each inner array
    for (let j = 0; j < size; j++) {
    // add 1 to i and j because we want the table to start from 1, not 0
      // push the the product to the current row's array
      innerArray.push((i + 1) * (j + 1));
      // push each inner array to the outer array
    } outerArray.push(innerArray);
    // return 
  } return outerArray;
}