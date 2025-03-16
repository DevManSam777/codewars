  return operation ? operation(7) : 7
}
​
function eight(operation) {
  return operation ? operation(8) : 8
}
​
function nine(operation) {
  return operation ? operation(9) : 9
}
​
// take the operation from above as a function with the rightOperand as the argument
// it returns an anonymous function with the leftOperand as the argument
// the anonymous function then completes the mathematical operation
function plus(rightOperand) {
  return function(leftOperand) {
    return leftOperand + rightOperand;
  }
}
​
function minus(rightOperand) {
  return function(leftOperand) {
    return leftOperand - rightOperand;
  }
}
​
function times(rightOperand) {
  return function(leftOperand) {
    return leftOperand * rightOperand;
  }
}
​
function dividedBy(rightOperand) {
  return function(leftOperand) {
    return Math.floor(leftOperand / rightOperand);
  }
}
  
​
function times(rightOperand) {
  return function(leftOperand) {
    return leftOperand * rightOperand
  }
}
​
function dividedBy(rightOperand) {
  return function(leftOperand){
    return Math.floor(leftOperand / rightOperand);
  }  
}