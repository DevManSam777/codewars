function sumCubes(n){
  let total = 0;
  for (let i = 0; i <= n; i++) {
    total += Math.pow(i, 3);
  } return total;
}