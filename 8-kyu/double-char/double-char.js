function doubleChar(str) {
  //return
  // split string into array of individul letter string
  // map over array and append each array element with another instance of itself
  // since they these are stings, addition will concatinate and not perform addition
  // join back into string
  return str.split("").map(a => a + a).join("")
}
​