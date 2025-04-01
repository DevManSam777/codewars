function multiplicationTable(size) {
  // initialize an empty array to hold the rows of the multiplication table.
  let outerArr = [];
​
  // iterate through each row of the table.
  for (let i = 0; i < size; i++) {
    // initialize an empty array to hold the values for the current row.
    let innerArr = [];
​
    // iterate through each column of the current row.
    for (let j = 0; j < size; j++) {
      // calculate the product of (row number) * (column number).
      // add 1 to i and j because we want the table to start from 1, not 0
      let product = (i + 1) * (j + 1);
​
      // add the calculated product to the current row's array
      innerArr.push(product);
    }
​
    // add the completed row (innerArr) to the outer array
    outerArr.push(innerArr);
  }
​
  // return 
  return outerArr;
}