function cubeOdd(arr) {
  if(arr.some(val => isNaN(val))) return undefined;
  
  return [...arr]
    .map(val => Math.pow(val,3))
    .filter(val => val % 2 !== 0)
    .reduce((acc, curr)=> acc + curr, 0)
}