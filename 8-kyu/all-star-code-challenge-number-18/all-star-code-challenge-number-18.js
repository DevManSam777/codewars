function strCount(str, letter){  
  // intialize a count variable and set its value to 0
  // loop through the string with a for loop
  // if the letter equals the counter, increment the count variable by 1
  // return the count variable
  
//   let count = 0;
//   for(let i = 0; i < str.length; i++) {
//     if (str[i] === letter) {
//       count ++;
//     }
//   } return count;
  
// or
  
// split string into array and filter the indicds where the letter argument is present
// return their total number 
    return str.split("").filter(a => a === letter).length;
  
}