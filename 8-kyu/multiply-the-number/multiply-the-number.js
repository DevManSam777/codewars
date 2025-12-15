function multiply(number){
  let length = `${Math.abs(number)}`.split('').length
  return number * 5**length 
}