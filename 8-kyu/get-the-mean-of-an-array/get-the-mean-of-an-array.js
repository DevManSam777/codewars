function getAverage(marks){
  //TODO : calculate the downward rounded average of the marks array
 
  // use reduce method to accumulate the sum of all marks
  // divide by the number of individual marks to find mean
  // wrap solution in Math.floor() to round down to nearest integer
  // return
  return Math.floor(marks.reduce((acc, mark) => acc += mark) / marks.length)
}