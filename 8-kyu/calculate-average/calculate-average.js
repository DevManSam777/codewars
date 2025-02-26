// function findAverage(array) {
//   // if an array is empty return 0
//   if (!Array.isArray(array) || array.length === 0) {
//     return 0;
//   }
  
//   // use reduce method to add indices together into a sum variable
  
//   const sum = array.reduce((accumulator, currentValue) => {
//     return accumulator + currentValue;
//   }, 0);
​
//   // return avergage by dividing sum by number of indices in array
//   return sum / array.length;
// }
​
// function findAverage(array) {
  
//   if (array.length === 0) {
//     return 0;
//   } 
//     const sum = array.reduce((acc, val) => {
//       return acc + val
//     }, 0);
//    retun sum / array.legth; 
// }
​
const findAverage = (array) => {return array.length === 0 ? 0 : array.reduce((acc, val) => {
      return acc + val}, 0) / array.length};