const powers = n => {
  let result = [];
  let currentPower = 1;
  
  while (n > 0) {
    if (n % 2 !== 0) {
      result.push(currentPower);
    }
    n = Math.floor(n / 2);
    currentPower *= 2;
  }
  
  return result;
};