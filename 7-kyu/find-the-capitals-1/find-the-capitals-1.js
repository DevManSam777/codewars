var capitals = function (word) {
  // initialize an empty array variable
  // loop through the word string
  // use the match method, or test method, and a regex for capital letters to see if current index is capital
  // if so, push the current index to the array
  // return the array
  
  const wordArray = [];
  for(let i = 0; i < word.length; i++){
    if ((/[A-Z]/).test(word[i])) {
      wordArray.push(i)
    }
  }
  return wordArray;
};