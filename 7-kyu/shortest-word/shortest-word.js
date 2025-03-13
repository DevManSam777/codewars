function findShort(s){
  // split the string into an array of indivual words
  let wordsArr = s.split(" ");
  // initialize an empty array to hold word lengths
  let lengthArr = [];
  // map over the wordsArr and push the length of each word to the lengthArr
  lengthArr.push(...wordsArr.map(word => word.length));
  // use Math.min and return shortest length
  return Math.min(...lengthArr);
}