function betterThanAverage(classPoints, yourPoints) {
  // get the sum of the classPoints by using the reduce method
  // divide the sum by the number of results to find average
  // if yourPoints is greater than the average of the classPoints
  // return true
  // else false
    let numStudents = classPoints.length;
    let average = classPoints.reduce((acc, currentValue) => acc + currentValue, 0) / numStudents;
    return yourPoints > average ? true : false
}
​