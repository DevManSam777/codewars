function duplicateEncode(word){
  // normalize case
    let words = word.toLowerCase();
  // intialize an empty object to store instances of letters
    let obj = {};
  // initialize a string that will be returned
    let str =""
  // iterate through the noramalized string 
  // if the current element is already present in the obj that means it appears more than once
  // reassign its value to  ")" in the object
    for (let i = 0; i < words.length; i++) {
      if (obj.hasOwnProperty(words[i])){
        obj[words[i]] = ")";
  // else create a new obj property of the element and set its value to "("
      } else obj[words[i]] = "(";
    }
  // loop through the normalized string
  // append the string with the value that of the property that matches the current index
    for (let i = 0; i < words.length; i++){
      str += obj[words[i]];
  // return the string
    } return str;
}
​