function stringClean(s){
  // Function will return the cleaned string
  
​
  // use replace method with a Regex as the first argument and an
  // empty string as the second
  //    - use \d to match any digit character
  //    - use g for global tag to select all numbers in the string
  //    - return a filtered string
  
  
  return  s.replace(/\d/g, "");
​
  
}