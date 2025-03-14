function digitize(n) {
  // convert n into individual strings of a single number within an array
  // reverse the order
  // map through the array and convert each index from a string to a number
   return  n.toString().split("").reverse().map(a => Number(a));
}