function arithmetic(a, b, op){
  const ops = {
    add: "+",
    subtract: "-",
    multiply: "*",
    divide: "/",
  }
  
  return eval(`${a} ${ops[op]} ${b}`)
  
}