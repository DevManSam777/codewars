function arrayDiff(a, b) {
  
  // 1. create an empty arry to hold that will be used to push any unique values to
  let arrayOfDifferences = [];
  
  // 2. loop through array a and see if a[i] is present in array b
  
  for (let i = 0; i < a.length; i ++) {
     
    // 3. if array[i] is not present in array b, add it to arrayOfDifferences
    if (!b.includes(a[i])) {
      arrayOfDifferences.push(a[i])
    }
  } console.log(arrayOfDifferences)
   // 4. retrun arrayOfDifferences
   return arrayOfDifferences;
}