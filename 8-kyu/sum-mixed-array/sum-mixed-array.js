function sumMix(x){
  // use reduce method to add up the sum of the numbers
  // use Number function to convert all indices to numbers
  return  x.reduce((a,b) => a + Number(b), 0)
}