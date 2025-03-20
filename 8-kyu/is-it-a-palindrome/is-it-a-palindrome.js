function isPalindrome(x) {
  // return
  // normalize string by making lower case
  // if that normalized string is strictly equal to 
  // normalized string split into an array, reversed and joined back into an array
  // then true
  return x.toLowerCase() === x.toLowerCase().split("").reverse().join("");
}