function findNextSquare(sq) {
  // initialize a square root variable
  const squareRoot = Math.sqrt(sq)
  // if squareRoot is a whole number, increment by one and square it
  // else return - 1
  return Number.isInteger(squareRoot) ? (squareRoot + 1)**2  : -1 ;
}