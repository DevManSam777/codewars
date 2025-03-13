function printerError(s) {
  // only letters a - m are colors and anything else is an error
  // replace all colors in the string with ""
  // return a string consisting of the string length, which will be composed of only errors, over the string length
  
  return `${s.replace(/[a-m]/g, "").length}/${s.length}`
  }
​
/*
function printerError(s) {
    // create a regex of letters between a-m 
    const colorRegex = /[a-m]/gi
    // initialize a denominator variable and set it to the length of the string
    let denominator = s.length;
    // initialize a error variable and set it to 0
    let error = 0;
    // iterate through the string  
    for (let i = 0; i < s.length; i++){
    //if the iterated value is not a valid color
      if (!s[i].match(colorRegex)) {
        error += 1
      }
    // incriment error variable by 1
    }
    return `${error}/${denominator}`
    // return a string with the errors / denominator
}
*/