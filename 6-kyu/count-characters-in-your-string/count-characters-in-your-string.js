function count(string) {
  // if given an empty string, return an empty object
  if (string.length === 0) {
    return {};
  }
  // initialize an empty object to hold characters as keys and the number of occurences of each for the values
  let charObj = {}
  // loop through the string
  for(let i = 0; i < string.length; i++) {
  // if the current index is a property of the object, increment its value by 1
    if(charObj.hasOwnProperty(string[i])){
      charObj[string[i]] += 1
    } else {
  // if this is the first occurence, add it to the object with a value of one
    charObj[string[i]] = 1;
    } 
  } // return the object 
    return charObj;
}