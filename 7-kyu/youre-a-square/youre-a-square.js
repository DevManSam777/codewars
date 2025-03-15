var isSquare = function(n){
  // find square root of n using Math.sqrt()
  // use Math.floor() on the square root of n 
  // if that value is equal to the square root of n return true
  // else return false
  return Math.sqrt(n) === Math.floor(Math.sqrt(n)) ? true : false
  }