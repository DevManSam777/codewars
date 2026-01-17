  function menFromBoys(arr){
  let uniqueVals = Array.from(new Set(arr))
  let evens = []
  let odds = []
​
  uniqueVals.forEach(val => val % 2 === 0 ? evens.push(val) : odds.push(val))
  evens = evens.sort((a,b) => a -b)
  odds = odds.sort((a,b) => b - a)
​
 return Array(evens, odds).flat();
}
​