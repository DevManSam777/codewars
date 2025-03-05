var summation = function (num) {
  // intialize a sum variable with a value of 0
  let sum = 0;
  
  // create a loop to accumulate sum of all integers between 0 and num 
  for (let i = 0; i <= num; i++){
    sum += i;
  }
  return sum;
}