function twoSort(s) {
  let sortedArr = s.sort();
  let firstWord = sortedArr[0];
  let string = ""
  for(let i = 0; i < firstWord.length - 1; i++){
    string += firstWord[i] + "***"
  } return string += firstWord[firstWord.length - 1]
}