function isPangram(string){
  // normalize string by making lowercase
  // use replace method and replace any character that is not a letter with an empty string
  let lowerString = string.toLowerCase().replace(/[^a-z]/gi, "")
  // convert to set to remove dupes
  const lettersSet = new Set([...lowerString]);
  // .size for sets is equivalent to .length for arrays
  // if the size of the letters array is 26 return true
  return lettersSet.size === 26 
}