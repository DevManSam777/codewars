function logicalCalc(array, op){
  switch (op) {
    case "AND":
      return array.reduce((a, c) => a && c);
    case "OR" :
      return array.reduce((a, c) => a || c);
    case "XOR":
      return array.reduce((a, c) => a != c);
  }
}