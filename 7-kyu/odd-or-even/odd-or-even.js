function oddOrEven(array) {
  // if empty array return even
   if(array.length === 0){
     return "even"
   }
  // return
  // accumulate sum of numbers in array using reduce method
  // use modulus operator and if 2 goes into sum evenly, return "even"
  // else return "odd"
  return array.reduce((a,b) => a + b, 0) % 2 === 0 ? "even" : "odd"
}