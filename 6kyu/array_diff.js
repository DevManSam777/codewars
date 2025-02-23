// Implement a function that computes the difference between two lists. The function should remove all occurrences of elements from the first list (a) that are present in the second list (b). The order of elements in the first list should be preserved in the result.

// Examples
// If a = [1, 2] and b = [1], the result should be [2].

// If a = [1, 2, 2, 2, 3] and b = [2], the result should be [1, 3].

// Solution

// ArraysFundamentalsAlgorithms

function arrayDiff(a, b) {
  
    // 1. create an empty array to hold that will be used to push any unique values to
    let arrayOfDifferences = [];
    
    // 2. loop through array a and see if a[i] is present in array b
    for (let i = 0; i < a.length; i ++) {
       
      // 3. if array[i] is present in array b, add it to arrayOfDifferences
      if (!b.includes(a[i])) {
        arrayOfDifferences.push(a[i])
      }
    } // 4. return arrayOfDifferences
     return arrayOfDifferences;
  }


  // tests
  console.log(arrayDiff([1,2], [1]), // [2], "a was [1,2], b was [1];
  arrayDiff([1,2,2], [1]), // [2,2], "a was [1,2,2], b was [1];
  arrayDiff([1,2,2], [2]), // [1], "a was [1,2,2], b was [2];
  arrayDiff([1,2,2], []), // [1,2,2], "a was [1,2,2], b was [];
  arrayDiff([], [1,2]), // [], "a was [], b was [1,2];
  arrayDiff([1,2,3], [1,2])/* [3], "a was [1,2,3], b was [1,2];*/ ); 
  
// arrayDiff([1,2], [1]), // [2], "a was [1,2], b was [1];
// arrayDiff([1,2,2], [1]), // [2,2], "a was [1,2,2], b was [1];
// arrayDiff([1,2,2], [2]), // [1], "a was [1,2,2], b was [2];
// arrayDiff([1,2,2], []), // [1,2,2], "a was [1,2,2], b was [];
// arrayDiff([], [1,2]), // [], "a was [], b was [1,2];
// arrayDiff([1,2,3], [1,2]) // [3], "a was [1,2,3], b was [1,2];