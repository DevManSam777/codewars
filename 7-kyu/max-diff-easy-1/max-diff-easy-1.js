function maxDiff(list) {
  const sorted = list.sort((a,b) => a -b);
  return list.length <=1 ? 0 : sorted[sorted.length -1] - sorted[0]
};