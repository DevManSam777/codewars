function countBy(x, n) {
  // initialize an empty array to hold values
  let arr = [];
  
  // use a for loop and set initial counter value to 1
  // while counter is less than n
  // increment by 1
  for (let i = 1; i <= n; i ++) {
    
  // push the product of x and the counter value to arr
    arr.push(x * i)
  }
  
  // return the array
  return arr;
}