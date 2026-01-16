function warnTheSheep(arr) {
  if(arr.join('').endsWith('wolf')) return "Pls go away and stop eating my sheep"
​
  return `Oi! Sheep number ${(arr.length -1) - (arr.indexOf('wolf'))}! You are about to be eaten by a wolf!`
}
​