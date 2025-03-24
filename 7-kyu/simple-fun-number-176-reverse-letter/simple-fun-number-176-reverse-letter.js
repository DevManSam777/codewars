function reverseLetter(str) {
  // any non-alphabet characters with an empty string
  // split into array, reverse, join back to array 
  // return
  return str.replace(/[^a-z]/g, "").split("").reverse().join("")
  
}