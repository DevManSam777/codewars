// function addLength(str) {
// // initialize a variable that creates and array of individual words
//  let arr = str.split(" ");
​
// // use a for loop to iterate through the array
//   for (i = 0; i < arr.length; i++){
​
// // concatinate the length of each index to the end of each string 
//     arr[i] += ` ${arr[i].length}`
​
// // return the array
//     } return arr;
// }   
​
​
const addLength = (str) => {
  // create an array in which each index is an individual word from the string
  // use the map method to concatinate the length of each index to each string
  // return array
  return str.split(" ").map(word => `${word} ${word.length}`)
}
​