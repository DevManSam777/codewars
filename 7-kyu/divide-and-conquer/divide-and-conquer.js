function divCon(x){
  return x.reduce((acc, curr)=> typeof curr === 'number' ? acc + curr : acc - Number(curr), 0)
}