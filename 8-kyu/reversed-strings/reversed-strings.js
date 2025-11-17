function solution(str){
  // initialize an variable with the value of an empty string
  let newStr = ""
  // run a for loop that iterates from the last index of the string
  // and decrements by one, appending the value of the current index
  // to the new string variable
  // then return the string
  for(let i = str.length -1; i >= 0; i--) {
    newStr += str[i]
  } return newStr;
}