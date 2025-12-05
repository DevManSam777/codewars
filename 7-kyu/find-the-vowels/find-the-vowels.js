function vowelIndices(word){
    let vowelRegex = /[aeiouy]/i;
    let array = word.split("");
    let newArray = [];
​
    for(const [index, letter] of array.entries()) {  
​
      if
  (vowelRegex.test(letter)) {
  // Test EACH letter
        newArray.push(index + 1);  // Add 1 for 1-indexed
      }
    }
​
    return newArray;
  }