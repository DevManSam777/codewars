  function reverseWords(str) {
  // take the string and use the replace method with a regex
  // that matches all word characters sequentially
  // in the second arguement use a callback function with the param for the matched word
  // split into array, reverse, return back as word.  
    
  // use replace method and match all non-whitespace characters sequentially
  // use a call back for the second arguement that takes the matches 
  // and split into an array, reverse, and join
  // return
    return str.replace(/\S+/g, match => match.split('').reverse().join(''))
}
​
​