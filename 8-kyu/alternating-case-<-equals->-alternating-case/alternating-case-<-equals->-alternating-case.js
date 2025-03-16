String.prototype.toAlternatingCase = function () {
  // return
  // use this keyword
  // split string into an array of individual character strings
  // map through array
  // if value at current index is identical to value at current index toLowerCase
  // then current index value is reassigned to all uppercase value
  // else current index value is reassigned to all lowercase value
  // join the array back into a string
  return this
    .split("")
    .map(a => a === a.toLowerCase() 
                ? a = a.toUpperCase()
              : a = a.toLowerCase())
    .join("")
}