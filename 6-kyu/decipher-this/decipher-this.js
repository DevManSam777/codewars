function decipherThis(str) {
  return str.split(' ').map(word => {
    // extract the number at the start and the remaining letters
    let num = word.match(/^\d+/)[0];
    let letters = word.slice(num.length);
​
    // convert number to first letter
    let first = String.fromCharCode(num);
​
    // swap second and last if there are 2+ letters
    if (letters.length >= 2) {
      let second = letters[0];
      let middle = letters.slice(1, -1);
      let last = letters[letters.length - 1];
      return first + last + middle + second;
    }
​
    // 0-1 letters, no swap needed
    return first + letters;
  }).join(' ');
}
​
​