function alphabetPosition(text) {
// create an empty object to store alphabet key value pairs i.e. a: 1, b: 2...
    const alphabet = {};
// letters in alphabet
    const letters = 'abcdefghijklmnopqrstuvwxyz';
// final sentence string
    let sentence = "";
  
// iterate through letters and populate the alphabet object
    for (let i = 0; i < letters.length; i++) {
      alphabet[letters[i]] = i + 1;
    }
  
// iterate through the input text
    for (let i = 0; i < text.length; i++) {
// convert the current character to lowercase
      const letter = text[i].toLowerCase();
  
  // check if the lowercase character exists as a key in the alphabet object
      if (alphabet[letter]) {
  // if it exists, append the corresponding numeric value (and a space) to the sentence string
        sentence += alphabet[letter] + " ";
      }
  // if the character is not a letter, skip it 
    }
  
// remove any trailing spaces from the sentence string and return it
    return sentence.trim();
  }