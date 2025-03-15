function check(a, x) {
//   // your code here 
 
//   // create a count variable
//   let count = 0;
  
//   // loop through array a 
//   for (let i = 0; i < a.length; i++) {
//   // if curren index is equal to x, increment count
//     if(a[i] === x) {
//       count ++
//     }
//   } // return true if count is greater than zero
//     return count > 0;
  
//  chain filter through array for instances of x and chain length property
// if length is greater than 0, return true, else false
  return a.filter((currentIndex) => currentIndex === x).length > 0 ? true : false
}