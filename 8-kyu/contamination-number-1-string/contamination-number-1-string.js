function contamination(text, char){
  // return an empty string if text arguement is falsy
  // else return char arguement text.length times
  
  return !text ? "" : char.repeat(text.length)
}