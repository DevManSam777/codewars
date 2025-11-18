function roundToNext5(n) {
  // if n mod 5 has no remainder return n
  if(n % 5 === 0){
    return n;
  // if n is positve and n mod 5 is not equal to zero then
  } else if (n > 0 && n % 5 !== 0) {
  // return the remainder of n mod 5 + n - 5
   return ((5 - (n % 5) + n));
  // return the remainder of n mod 5 minus n * -1
 } else {
  return -(n % 5 - n)
 }
}