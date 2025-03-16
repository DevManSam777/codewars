function count(string) {
  // if string is empty, return an empty array
  // initiaize an empty object variable
  // split the string into an array of individual characters
  // iterate over array using forEach 
  // use conditional statement to determine if the object that element as a property
  // if so, increment its value by one in the object
  // if not, add it to the array with a value of 1
  // return the object
    if (string.length === 0) {return {}};
    let charObj = {};
    
     string.split("")
    .forEach(a => charObj.hasOwnProperty(a) ? charObj[a] ++ : charObj[a] = 1) 
    return charObj;
}
​
​
​
// past solution 
​
// function count(string) {
//   // if given an empty string, return an empty object
//   if (string.length === 0) {
//     return {};
//   }
//   // initialize an empty object to hold characters as keys and the number of occurences of each for the values
//   let charObj = {}
//   // loop through the string
//   for(let i = 0; i < string.length; i++) {
//   // if the current index is a property of the object, increment its value by 1
//     if(charObj.hasOwnProperty(string[i])){
//       charObj[string[i]] += 1
//     } else {
//   // if this is the first occurence, add it to the object with a value of one
//     charObj[string[i]] = 1;
//     } 
//   } // return the object 
//     return charObj;
// }