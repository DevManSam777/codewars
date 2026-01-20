function mxdiflg(a1, a2) {
  if (a1.length === 0 || a2.length === 0) {
    return -1;
  }
​
  let min1 = Math.min(...a1.map(x => x.length));
  let min2 = Math.min(...a2.map(x => x.length));
  let max1 = Math.max(...a1.map(x => x.length));
  let max2 = Math.max(...a2.map(x => x.length));
​
  return Math.max(max1 - min2, max2 - min1);
}