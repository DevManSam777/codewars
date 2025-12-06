function minValue(values){  
// we want to return the smalles possible number that
// includes all digits present ONLY once
// first convert the array to a set to get rid of duplicates
// then convert back into an array and sort in ascending order
// convert to a string to remove commas and spaces
// return as a number
let numSet = new Set(values);
console.log(numSet);
​
array = [...numSet].sort((a,b)=>a-b);
console.log(array);
​
console.log(Number(array.join('')));
  
return Number(array.join(''));
}