function arrayDiff(a, b) {
  
  // create an empty array to hold that will be used to push any unique values to
  let arrayOfDifferences = [];
  
  // loop through array a and see if a[i] is present in array b
  
  for (let i = 0; i < a.length; i ++) {
     
    // if array[i] is not present in array b, add it to arrayOfDifferences
    if (!b.includes(a[i])) {
      arrayOfDifferences.push(a[i])
    }
  } console.log(arrayOfDifferences)
   // return arrayOfDifferences
   return arrayOfDifferences;
}