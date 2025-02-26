function basicOp(operation, value1, value2){
  // switch statement with case being operation
  let val = 0;
  switch (operation) {
      case "+":
        val = value1 + value2;
        break;
      case "-":
        val = value1 - value2;
        break;
      case "*":
        val = value1 * value2;
        break;
      case "/":
        val = value1 / value2;
        break;
      default: 
        break;
    }
  return val;
}
​
// const basicOp = (o, v1, v2) => {
//  return o === "+" ? v1 + v2 : o === "-" ? v1 - v2 : o === "*" ? v1 * v2 : o === "/" ? v1 / v2 : 0;
// }