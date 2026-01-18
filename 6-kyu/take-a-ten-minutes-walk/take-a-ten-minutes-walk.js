function isValidWalk(walk) {
  if(walk.length !== 10) return false;
  let home = [0, 0]
  let current = [...home];
  walk.forEach(direction => direction === 'n' ? current[1]++ : direction === 's' ? current[1]-- : direction === 'e' ? current[0]++ : current[0]--)
  return home.every((cell, i) => cell === current[i])
}
​