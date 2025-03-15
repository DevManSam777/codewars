function invert(array) {
  // return an empty array if array is empty
  // else map over array and multiple each index by -1 (placing a "-" sign in front of the varaible is the same thing)
   return array.length === 0 ? [] : array.map(a => -a);
}