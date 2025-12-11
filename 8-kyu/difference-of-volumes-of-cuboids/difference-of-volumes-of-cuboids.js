function findDifference(a, b) {
  let aTotal = a.reduce((acc, current) => acc *= current);
  let bTotal = b.reduce((acc, current) => acc *= current);
  return Math.max(aTotal, bTotal) - Math.min(aTotal, bTotal);
}