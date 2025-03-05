 function basicOp(operation, value1, value2){
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
};
​
// const basicOp = (o, v1, v2) => {
//  return o === "+" ? v1 + v2 : o === "-" ? v1 - v2 : o === "*" ? v1 * v2 : o === "/" ? v1 / v2 : 0;
// }
​
​
// function basicOp(operation, value1, value2){
//   // the operation argument determins the math operation
//   // create an object with operations as keys and callbacks as values
//   const ops = {
//     "+": (a,b) => a + b,
//     "-": (a,b) => a - b,
//     "*": (a,b) => a * b,
//     "/": (a,b) => a / b
//   }
//   // return a string literal 
//   return `${value1} ${operation} ${value2} = ${ops[operation](value1, value2)}`;
// }