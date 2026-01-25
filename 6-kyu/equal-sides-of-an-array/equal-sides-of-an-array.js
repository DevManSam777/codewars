function findEvenIndex(arr) {
  return arr.findIndex((_,i) => arr.slice(0,i)
                       .reduce((acc,curr)=> acc + curr, 0) === arr
                       .slice(i+1)
                       .reduce((acc,curr)=> acc + curr, 0))
}