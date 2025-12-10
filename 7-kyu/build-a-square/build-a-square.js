function generateShape(integer) {
  let square = "";
​
  // outer loop controls the rows
  for (let i = 0; i < integer; i++) {
    // inner loop controls the columns in the current row
    for (let j = 0; j < integer; j++) {
      square += '+';
    }
​
    // add a newline character at the end of every row, 
    // except the last one, to prevent a trailing newline.
    if (i < integer - 1) {
      square += '\n';
    }
  }
  return square;
} 