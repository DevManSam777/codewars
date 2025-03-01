function lovefunc(flower1, flower2){
  // if the sum of flower1 and flower two is odd, true
  // anything else will be false
  // use modulus operator to determine if odd or even
  // if the sum has a remainder when % 2, then it is odd and the we should return true
  // else even and we should return false
  const sum = flower1 + flower2;
  return sum % 2 != 0 ? true : false
}