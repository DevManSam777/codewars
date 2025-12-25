const arithmetic = (a, b, op) => ({
    add: a + b,
    subtract: a - b,
    multiply: a * b,
    divide: a / b,
  }[op])