function noSpace(x){
  // split into array and use single space as seperator to create indices of single words
  // then join back into string with empty string as seperator
  return x.split(" ").join("");
}