function countLettersAndDigits(input) {
  let regex = /[a-z0-9]/gi;
  let counter = 0;
  for (let i = 0; i < input.length; i++) {
    if (input[i].match(regex)) {
      counter ++;
    }
  } return counter;
}