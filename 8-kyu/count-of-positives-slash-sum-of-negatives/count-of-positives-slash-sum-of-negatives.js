function countPositivesSumNegatives(input) {
  // if the input is an empty array or null, return an empty array
  
 if (!input || input.length === 0) {
    return []; 
 }
  
  // initialize an empty array to push values to
  let array = [];
  
  // initialize two variables for pos and neg using filter method 
  let positiveNums = input.filter((a) => a > 0);
  let negativeNums = input.filter((a) => a < 0);
  
  // if there are positive numbers present, push the total number to the array
  // else push 0 to the array
  positiveNums.length > 0 ? array.push(positiveNums.length) : array.push(0);
  
  // if there are negative numbers present, use reduce and push their sum to the array
  // else push 0
  negativeNums.length > 0 ? array.push(negativeNums.reduce((a,b) => a + b)) : array.push(0);
  
  // return the array
  return array;
}