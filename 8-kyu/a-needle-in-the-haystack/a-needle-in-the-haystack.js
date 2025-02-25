function findNeedle(haystack) {
  // create an empty string to hold results
    let string = "";
  // loop through the array 
    for (let i = 0; i < haystack.length; i++) {
  // if the index of the array is has the value of "needle"
      if (haystack[i] === "needle"){
  // update string variable
          string = `found the needle at position ${i}`
      }
  // return the final string
    } return string;
}