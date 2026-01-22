function deleteNth(arr, n){
  const counts = {};
  return arr.filter(val => {
    counts[val] = (counts[val] || 0) + 1;
    return counts[val] <= n;
  });
}