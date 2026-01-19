function splitAndMerge(string, s) {
  return string.split(" ").map(word => word.split('').join(s)).join(' ')
 }