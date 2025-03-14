function accum(s) {
  // split into array
  // map over each letter 
  // make the first letter uppercase and all subsequent letters lowercase
  // join the array back into a string with - as a seperator
  return s.split('').map((letter, i) => {
    return letter.toUpperCase() + letter.toLowerCase().repeat(i);
  }).join('-');
}