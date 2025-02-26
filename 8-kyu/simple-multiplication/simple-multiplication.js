function simpleMultiplication(number) {
  // use modulus operator to determine if number is even
  // number will be even if it does not have a remainder
  // if true then return number * 8
  // if modulus % 2 returns remainder
  // then false and return number * 9
  
    return number % 2 === 0 ? number * 8 : number * 9
}
​