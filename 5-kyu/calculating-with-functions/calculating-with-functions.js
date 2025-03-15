// currying 
// function for the number zero
// if called alone like zero(), it returns 0
// when given an operation like zero(plus(5)), it passes 0 as the left operand, and calls plus(rightOperand)
function zero(operation) {
  return operation ? operation(0) : 0
}
​
function one(operation) {
  return operation ? operation(1) : 1
}
​
function two(operation) {
  return operation ? operation(2) : 2
}
​
function three(operation) {
  return operation ? operation(3) : 3
}
​
function four(operation) {
  return operation ? operation(4) : 4
}
​
function five(operation) {
  return operation ? operation(5) : 5
}
​
function six(operation) {
  return operation ? operation(6) : 6
}