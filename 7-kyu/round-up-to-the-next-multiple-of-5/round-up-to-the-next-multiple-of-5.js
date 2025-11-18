function roundToNext5(n) {
  if(n % 5 === 0){
    return n;
  } else if (n > 0 && n % 5 !== 0) {
   return ((5 - (n % 5) + n));
 } else {
  return -(n % 5 - n)
 }
}