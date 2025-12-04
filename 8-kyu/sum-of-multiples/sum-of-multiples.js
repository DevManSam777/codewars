function sumMul(n,m){
// add all mulitples of n together that are less than m
// if n or m are less than or equal to 0 return "INVALID"
// if m is less than n return "INVALID"
  if (m < n || m <= 0 || n <= 0) {
    return "INVALID"
  }
​
  let sum = 0;
  let multiple = n;
  // use a do while loop to to add up the sum of all multiples of 
  // m below n; 
  // we need a sum variable as a counter
  // we also need mulitiples variable that increments by n 
​
  do {
    sum += multiple;
    multiple += n;
  } while (multiple < m);
​
  return(sum);
}