function repeatStr (n, s) {
  // initialize a variable with an empty string value
  let string = "";
  // make a for-loop that runs n number of times and concatinates s to string variable
  for(let i = 0; i < n; i++) {
    string += s;
  }
  // return string
  return string;
}