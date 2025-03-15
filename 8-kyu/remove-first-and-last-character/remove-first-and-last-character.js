function removeChar(str){
  // initialize array variable of individual letters
  let arr = str.split("");
  
  // remove first and last indexes using shift and pop array methods
  arr.shift();
  arr.pop();
  
  // use join array method to convert back into string and return
  return arr.join("");
​
};
​
​
​
​