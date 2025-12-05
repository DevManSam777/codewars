function array(string) {
  // take the string and convert it to an array with "," as the delimiter
  // if the array length is less than 3 return null
  // remove the first and last indices 
  // join back to string with " " as the separator
    
  let array = string.split(",")
  console.log(array);
  if (array.length < 3) {
    return null;
  }
  array.pop();
  array.shift();
 console.log(array)
 let finalString = array.join(" ")
 return finalString
}