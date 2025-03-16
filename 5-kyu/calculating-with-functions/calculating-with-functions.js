// currying 
// function for the number zero
// if called alone like zero(), it returns 0
// when given an operation like zero(plus(5)), it passes 0 as the left operand, and calls plus(rightOperand)
function zero(operation) {
  return operation ? operation(0) : 0
}

function one(operation) {
  return operation ? operation(1) : 1
}

function two(operation) {
  return operation ? operation(2) : 2
}

function three(operation) {
  return operation ? operation(3) : 3
}

function four(operation) {
  return operation ? operation(4) : 4
}

function five(operation) {
  return operation ? operation(5) : 5
}

function six(operation) {
  return operation ? operation(6) : 6
}

function seven(operation) {
  return operation ? operation(7) : 7
}

function eight(operation) {
  return operation ? operation(8) : 8
}

function nine(operation) {
  return operation ? operation(9) : 9
}

// take the operation from above as a function with the rightOperand as the argument
// it returns an anonymous function with the leftOperand as the argument
// the anonymous function then completes the mathematical operation
function plus(rightOperand) {
  return function(leftOperand) {
    return leftOperand + rightOperand;
  }
}

function minus(rightOperand) {
  return function(leftOperand) {
    return leftOperand - rightOperand;
  }
}

function times(rightOperand) {
  return function(leftOperand) {
    return leftOperand * rightOperand;
  }
}

function dividedBy(rightOperand) {
  return function(leftOperand) {
    return Math.floor(leftOperand / rightOperand);
  }
}
  

function times(rightOperand) {
  return function(leftOperand) {
    return leftOperand * rightOperand
  }
}

function dividedBy(rightOperand) {
  return function(leftOperand){
    return Math.floor(leftOperand / rightOperand);
  }  
}
