function sumMix(x){
  // iterate over x array using map method
  // use Number function to convert all indices to numbers
  // use reduce method to add up the sum of the numbers
 return  x.map(num => Number(num)).reduce((a,b) => a + b)
}