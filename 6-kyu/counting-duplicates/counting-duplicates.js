function duplicateCount(text) {
  // initialize a counter for duplicate characters/digits
  let count = 0;
​
  // convert text to lowercase to normalize
  let normalizedText = text.toLowerCase();
​
  // initialize an empty object to store character counts
  let textObj = {};
​
  // iterate through the normalized string to count character instances
  for (let i = 0; i < normalizedText.length; i++) {
    // get the character/digit at the current index
    let char = normalizedText[i];
​
    // if the character is already in the object, increment its count
    // otherwise, add it to the object and set its value to 1
    if (textObj[char]) {
      textObj[char]++;
    } else {
      textObj[char] = 1;
    }
  }
​
  // iterate through the object to identify and count duplicates
  for (let char in textObj) {
    // if the count of a character/digit is greater than 1, it's a duplicate
    if (textObj[char] > 1) {
      // increment the duplicate count
      count++;
    }
  }
  // return the count
  return count;
}