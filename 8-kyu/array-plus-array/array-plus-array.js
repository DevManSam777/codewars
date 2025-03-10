function arrayPlusArray(arr1, arr2) {
  // use reduce method to accumulate sums of each array
  // return sum of accumulated arr1 indices + sum of accumulated arr2 indices
  return arr1.reduce((acc, num) => acc + num) + arr2.reduce((acc, num) => acc + num); //something went wrong
}